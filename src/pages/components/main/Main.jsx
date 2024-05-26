import Image from 'next/image';
import EthLogo from '../../../../public/galaxy-img.gif';
// import Button from '../button/Button';
import styles from "@/styles/Home.module.css";
// import { useAccount, useBalance, useSendTransaction, usePrepareSendTransaction, WagmiConfig, useSigner, useSignMessage, useConnect, useContractRead, useContractWrite, useWalletClient, } from "wagmi";
// import { useEffect, useState } from 'react';
// import { parseEther, createWalletClient, custom, http, createPublicClient, keccak256, } from 'viem';
// import { mainnet } from "wagmi/chains";
// import {ethers, solidityKeccak256, encodeRlp, solidityPackedKeccak256, AlchemyProvider, hashMessage} from "ethers";
// import { mainnet } from "viem/chains";
// import SignClient from '@walletconnect/sign-client';
// import { WalletConnectModal } from '@walletconnect/modal'
// const {writeAsync} = useContractWrite()
// import MetaTransactionDeposit from '../../../../contracts/MetaTransactionDeposit.json';
// import { publicClient, } from '@/pages/client';
export default function Main() {
	// const [showMenu, setShowMenu] = useState(false);
	// const [isExpanded, setIsExpanded] = useState(false);

	// const { address: userAddress } = useAccount();
    // const [amount, setAmount] = useState("");
	// const {acc, setAcc} = useState("")
    // const [message, setMessage] = useState("");
    // const [recipient, setRecipient] = useState("");

	// const provider = useProvider();
//   const { data: signer } = useWalletClient();
//   const { data: signer } = useSigner();
// const {data:balance}= useBalance({
// 	address: "0x5B22aDfF1ae6BEF1d561616667eBaB8a1CFB8B4F"
// })

// console.log('rel', balance);
	// const amount = ethers.utils.parseEther('2'); // Amount to deposit
	// const contractAddress = "0xFcA181BCe6FDA86299E0Fd5510D8f30cAD4a3cc9"; // Deployed contract address
	// const { data, isError, isSuccess, signMessage} = useSignMessage({
		// message: message,
		// onSuccess(data) {
		//   console.log('Success', data)	
// 		  const userAddress = '0x5B22aDfF1ae6BEF1d561616667eBaB8a1CFB8B4F';
// const amount = parseEther('0.001'); 
// 		   relayerDeposit(userAddress, amount, data);
		//   return data;
		// },
		// onSettled(data, error) {
		//   console.log('Settled', { data, error })
// 		  const userAddress = '0x5B22aDfF1ae6BEF1d561616667eBaB8a1CFB8B4F';
// const amount = parseEther('0.001'); 
// 		   relayerDeposit(userAddress, amount, data);
	// 	},
	// 	onMutate(args) {
	// 	  console.log('Mutate', args)
	// 	},
	// 	onError(error) {
	// 	  console.log('Error', error)
	// 	},
	//   });
	// const createSignature = async (userAddress, amount, contractAddress, signer) => {
	// 	const message = solidityPackedKeccak256(["address", "uint", "address"], [userAddress, amount, contractAddress]);
	// 	const prefixedMessage = hashMessage(message);
	// 	setMessage(prefixedMessage);
	// 	// alert(prefixedMessage)
	// 	// return;
	// 	signMessage({ message: prefixedMessage });
		
	//   }

	//   const createSignature = async (userAddress, amount, contractAddress, signer) => {
    // const message = solidityPackedKeccak256(["address", "uint", "address"], [userAddress, amount, contractAddress]);
    // const prefixedMessage = hashMessage(message);
    // setMessage(prefixedMessage);

    // Assuming signMessage accepts the message directly
    // signMessage(prefixedMessage);
// };
	//   const signAM = async () => {
	// 	const signature = createSignature(userAddress, amount, contractAddress, signer);
	// 	console.log(signature);
	//   }
	
	// const {address} = useAccount();
	// const {data: getContractBalance} = useContractRead({
	// 	aaddress: '0xB80affC78b85982f7f82cebf2d793618C168524E',
	// 	abi: abi,
	// 	functionName: 'getBalance',
	// 	args:[]
	// });
//  const { connector: activeConnector, isConnected } = useAccount()
//   const { connect, connectors, error, isLoading, pendingConnector } =
//   useConnect({
// 	  chainId: mainnet.id,
// 	})
	
	// const {sendTransaction, isLoading:sendIsLoading, isSuccess:sendIsSuccess, isError:sendIsError, error:sendError} = useSendTransaction({
	// 	from: address,
	// 	to:'0x0baf48D836001C43a2CBf4f69Aa848A052507964',
	// 	value:parseEther('0.01'),
	// 	gasLimit:'21000'
	// });
	// const sign = () =>{
	// 	signMessage()
	// }
	

// const relayerDeposit = async (userAddress, amount, signature) => {
    // Replace with your actual Alchemy API key
    // const alchemyApiKey = 'g_MWUeOGtR5gKMb78Xx3mQoBarteyMbZ';
    // const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    // const contractABI = [ /* Your contract ABI here */ ];
    
    // Replace with your actual relayer's private key
    // const relayerPrivateKey = 'c8e4bf5586fb216d21585c2b64e777fd0856d233954474819de8703d6895bfe7';
    
    // Initialize the Alchemy provider
    // const provider = new AlchemyProvider('homestead', alchemyApiKey);
    // const sepoliaProvider = new AlchemyProvider('sepolia', alchemyApiKey);
    // Initialize the relayer's wallet
    // const relayerWallet = new ethers.Wallet(relayerPrivateKey, sepoliaProvider);
    
// 	const balance = await relayerWallet.getBalance();
// console.log(`Relayer balance: ${ethers.utils.formatEther(balance)} ETH`);

// console.log(balance);
//     // Initialize the contract
//     const contract = new ethers.Contract(contractAddress, MetaTransactionDeposit, relayerWallet);
    
//     console.log('contract send', contract);
//     try {
//         console.log('before');
// 		//     const gasEstimate = await contract.estimateGas.deposit(userAddress, amount, signature);
//         // const gasPrice = await provider.getGasPrice();
// 		console.log('sighj', signature);
//            const tx = await contract.deposit(userAddress, amount, signature);
//         console.log('tx', tx);
//         await tx.wait();
//         console.log('Deposit successful');
//     } catch (error) {

//         console.error('Deposit failed', error);
//     }
// };

// const handleDeposit = async () => {
// 	const userAddress = '0x5B22aDfF1ae6BEF1d561616667eBaB8a1CFB8B4F';
// const amount = parseEther('0.001'); 
// Specify the amount to deposit
// const signature = '0x546c7f2325f42c260de11a4ee521c8784fcd3787d59fa4fb9e6a9cc25b52d8463dcca68de9c2e2ee49f6f0cfd092d4979d9831c7d7d39d36d14ddd44b9c15a151b'; // Provide the valid signature here

// createSignature(userAddress, amount, contractAddress, signer)
//     .then(signature => {
//         console.log('Signature:', signature);
//         relayerDeposit(userAddress, amount, '0x49bf88383ffee567faabc96d5c1786bb9f1e0a1256ab0901a74261a2999f6c2b066aff120a5d7290011bec119ff86e98a7f285dd764b5ca3b8544ffc2f4a036f1b');
//     })
//     .catch(error => {
//         console.error('Error creating signature:', error);
//     });


		
	// }, 5000);
	// ('0x5B22aDfF1ae6BEF1d561616667eBaB8a1CFB8B4F', amountInWei, );
	// await relayerDeposit('0x5B22aDfF1ae6BEF1d561616667eBaB8a1CFB8B4F', parseEther('0.001'), '0x49bf88383ffee567faabc96d5c1786bb9f1e0a1256ab0901a74261a2999f6c2b066aff120a5d7290011bec119ff86e98a7f285dd764b5ca3b8544ffc2f4a036f1b', contractAddress, MetaTransactionDeposit, '', 'c')
// };

// useEffect(() => {
// 	console.log('getContractBalance', getContractBalance);
	
// }, getContractBalance)


// async function submitMetaTransaction(userAddress, amount, signature, relayerSigner, contractAddress) {
//     const contract = new ethers.Contract(contractAddress, MetaTransactionDeposit.abi, relayerSigner);
//     const tx = await contract.deposit(userAddress, amount, signature);
//     await tx.wait();
//     console.log('Transaction submitted:', tx.hash);
// }

// try {
//   const { data: writeData, isLoading: writeIsLoading, isSuccess: writeIsSuccess, write }  = useContractWrite({
// 	abi: abi,
// 	address: "0x0baf48D836001C43a2CBf4f69Aa848A052507964",
// 	functionName: "deposit",
// 	value: parseEther('0.001')
//   })
// 	// setTransactionHash(tx);
// 	console.log(`Transaction Hash:`, data);
// 	const payHandler = async () => {
// 		write()
// 	}
// 	const payHandler = async () => {
// 		sendTransaction();
// 			const walletClient = createWalletClient({
// 		chain:mainnet,
// //   transport: http()
//   transport: custom(window.ethereum)
// })
// // 		const request = await walletClient.prepareTransactionRequest({
// //   account: "0x0baf48D836001C43a2CBf4f69Aa848A052507964",
// //   to: '0x68D99e952cF3D4faAa6411C1953979F54552A8F7',
// //   value: parseEther('0.01')
// // })
// // console.log(request);
// // return;
// // const signature = await walletClient.sendRawTransaction({
// //   serializedTransaction: '0xd3b1452ac6546c7006092053a0632937962fb8a05ab5a3d4df4c3ed3f51778b10f9a0bd89aba45c693e8f06843d8a5f3cf46965d86e94aa57ff461a6b658e7671b'
// // })
// // console.log(signature);
// // const signature = await walletClient.signTransaction(request) 
// // 0xd3b1452ac6546c7006092053a0632937962fb8a05ab5a3d4df4c3ed3f51778b10f9a0bd89aba45c693e8f06843d8a5f3cf46965d86e94aa57ff461a6b658e7671b
 
// const hash = await walletClient.sendRawTransaction('0xd3b1452ac6546c7006092053a0632937962fb8a05ab5a3d4df4c3ed3f51778b10f9a0bd89aba45c693e8f06843d8a5f3cf46965d86e94aa57ff461a6b658e7671b')
// console.log(hash);
// 		// 0xd3b1452ac6546c7006092053a0632937962fb8a05ab5a3d4df4c3ed3f51778b10f9a0bd89aba45c693e8f06843d8a5f3cf46965d86e94aa57ff461a6b658e7671b
// 		    // signer?.sendTransaction({to: '0x68D99e952cF3D4faAa6411C1953979F54552A8F7',
//             //                 value: parseEther('0.01'),
//             //             });
// 	}

	// function handleShowMenu() {
	// 	setShowMenu(!showMenu);
	// 	setIsExpanded(!isExpanded);
	// }

	// const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
	// 	useState(false);
	// const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

	// const closeAll = () => {
	// 	setIsNetworkSwitchHighlighted(false);
	// 	setIsConnectHighlighted(false);
	// };
	return (
		<main className='w-full h-dvh sm:h-[89dvh] mt-6 mb-4 gradient-bg'>
			<section className='w-[90%] h-full mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-3'>
				<section className='basis-[45%] '>
					<h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4'>
						Claim Hot and Upcoming Airdrops
					</h1>
					
					<p className='mb-4 sm:text-lg'>
						Stay up to date with latest, hotest and potential airdrops. See
						what's trending and partake...
					</p>
{/* {isConnected && <div>Connected to {activeConnector.name}</div>} */}
 
      {/* {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
			connect
          {connector.name}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            ' (connecting)'}
        </button>
      ))}  */}
 <br />
      {/* {error && <div>{error.message}</div>} */}
					{/* {signIsLoading && 
					<div>sign pending</div>
				}
					{signIsSuccess && 
					<div>sign Successful</div>
				}
					{signIsError && 
					<div>sign Failed: {signError.message}</div>
				} */}
				 	{/* {sendIsLoading && 
				 	<div>pending</div>
				 }
				 	{sendIsSuccess && 
				 	<div>Successful</div>
				 }
				 	{sendIsError && 
				 	<div>Failed: {sendError.message}</div>
				 } */}

				 {/* {writeIsLoading && 
					<div>write pending</div>
				}
					{writeIsSuccess && 
					<div>swriteSuccessful</div>
				} */}

				<br />
					{/* {address == undefined && 
						(<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isConnectHighlighted
									? styles.highlightSelected
									: ``
							}`}
						>
							<w3m-button />
						</div>)
				}	 */}
				
				{/* <button onClick={handleDeposit}>	Pay</button>
				<br />
				<button onClick={signAM}>	Sign Ak</button> */}
				{/* <h1>{bal}</h1> */}
				</section>

				<section className='basis-[55%] flex items-center justify-center'>
					<div className=' p-1'>
						<Image
							src={EthLogo}
							alt='Ethereum logo'
						/>
					</div>
				</section>
			</section>
		</main>
	);
}
