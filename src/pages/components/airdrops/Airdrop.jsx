import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../newmodal/Newmodal';

// import another from '../../../../public/another.png';
import aperture from '../../../../public/aperture.jpg';
import blackwing from '../../../../public/blackwing.jpg';
import drift from '../../../../public/drift.jpg';
import eigen from '../../../../public/eigen.jpg';
import imutable from '../../../../public/imutable.jpg';
import kamino from '../../../../public/kamino.jpg';
import lunastorm from '../../../../public/lunastorm.jpg';
import mode from '../../../../public/mode.jpg';
import myth from '../../../../public/myth.png';
import primex from '../../../../public/primex.svg';
import raiinmaker from '../../../../public/raiinmaker.jpg';
import renzo from '../../../../public/renzo.jpg';
import revolving from '../../../../public/revolving.jpg';
import saltwater from '../../../../public/saltwter.jpg';
import entangle from '../../../../public/Entangle-logo.jpg';
import masa from '../../../../public/masa.jpg';
import zksync from '../../../../public/zkSync-logo-1.jpg';
import ethermail from '../../../../public/EtherMail-logo.png';
import xtreme from '../../../../public/Xtremeverse-logo.png';
import zyfi from '../../../../public/Zyfi-logo.jpg';
import nyan from '../../../../public/rhPh2p8V_400x400.png';
import phaver from '../../../../public/Phaver-logo.jpg';
import htx from '../../../../public/IMG_7913.jpeg';
import cryptopia from '../../../../public/th9slQSL_400x400.jpg';
import ethana from '../../../../public/Ethena-logo.png';
import memecoin from '../../../../public/Memecoin-logo.jpg';
import notional from '../../../../public/Notional-logo.jpg';
import ambient from '../../../../public/Ambient-logo.jpg';
import zkpass from '../../../../public/JkCgx5bQ_400x400-1.jpg';
import zoth from '../../../../public/ZOTH-logo.jpg';
import moongate from '../../../../public/Moongate-logo.jpg';
import sophon from '../../../../public/9k4jAYsY_400x400.jpg';
import solv from '../../../../public/Solv-Protocol.jpg';
import debridge from '../../../../public/deBridge-logo.jpg';
import karak from '../../../../public/Karak-logo.jpg';
import overtrip from '../../../../public/48mlZCiu_400x400.jpg';
import coti from '../../../../public/COTI-logo.jpg';
import sharpe from '../../../../public/Sharpe-Labs-logo.jpg';
import kelp from '../../../../public/Kelp-DAO-logo.jpg';
import beoble from '../../../../public/beoble-logo.jpg';
import xyro from '../../../../public/oQtnZZS5_400x400.jpg';
import synther from '../../../../public/SYNTHR-logo.jpg';
import lava from '../../../../public/Lava-logo.jpg';
import pixels from '../../../../public/Pixels-logo.jpg';


const data = [
	{
		image: pixels,
		title: 'PIXELS',
		action: "Pixels have airdropped PIXEL to users who signed up and completed simple tasks. Users who participated in Airdrop Season 1 and Season 2 can now withdraw the tokens as mentioned below. Users who had staked RON by February 8th at 2:00:00 GMT are also eligible for an additional 20M PIXEl airdrop. PIXEL is also live on Binance, so you can withdraw your tokens to Binance if you wish to.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: lava,
		title: 'LAVA',
		action: "Lava has raised $15M in funding from investors like HashKey Capital and Jump Capital and has also confirmed to launch the “LAVA” token. They have introduced a points system where users can earn points by signing up, changing their wallet’s blockchain connection to Lava, and using the wallet as usual. Also, earn 10% of the points from each referral. Users who collect points may get an airdrop when their token goes live.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: synther,
		title: 'SYNTHR',
		action: "SYNTHR has confirmed to launch thier own token “SYNTHR’ and has launched a testnet campaign. Users who complete testnet action will earn points in the form of syCREDITS. Also get more points from each referrals. User who collect syCREDITS may get an airdrop when their token goes live.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: xyro,
		title: 'XYRO',
		action: "XYRO is giving away free NFTs and airdrop points to Whitelist users. These NFTs will act as an access key to the beta test campaign and competitive airdrop stage 2. Users can participate and start earning the roles eligible for Whitelist NFT mint by following the steps below.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: beoble,
		title: 'BEOBLE',
		action: "beoble had raised $2M in funding from investors like HashKey Capital and Samsung Next. They have launched BBL token and has confirmed to do an airdrop to users who collect cat points. Sign up at beoble and complete simple tasks to earn cat points. Also, earn more points for each referral. The snapshot of eligible users will be taken on March 31st, 2024 and users must hold at least 0.03 ETH or 150 BBL to be eligible for the airdrop.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: kelp,
		title: 'KELP DAO',
		action: "Kelp DAO doesn’t have their own governance token but has launched a points program called Kelp Miles and hinted at rewarding users. To start earning Kelp miles and EigenLayer points, stake ETH or other LSTs like stETH or provide liquidity to the rsETH pools. Users who collect Kelp Miles will likely get an airdrop if they launch their own token.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: sharpe,
		title: 'SHARPE',
		action: "Sharpe has confirmed to launch their token “SHARPE” and do an airdrop to users who collect points. Sign up at Sharpe to receive 100 Sharpe points. Also, invest in the Sharpe Earn strategies such as Lido stETH and Rocketpool rETH to earn more points. The points will get converted to SHARPE tokens after the token goes live. Sharpe has confirmed to launch their token $SHARPE and is organising an #airdrop for users who collect points. Here are all the details",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: coti,
		title: 'COTI',
		action: "COTI is airdropping a total of 40M COTI tokens to past and new COTI participants. Visit the COTI treasury and deposit COTI tokens to share the total pool. For every Treasury deposit, you’ll start accumulating APY rewards that are redeemable at any given time. On top of that, you’ll get a share of 40M COTI V2 Tokens rewards that will be distributed after the COTI V2 TGE, which is planned for Q4 this year",
		value: '40M COTI',
		status: 'confirmed',
	},
	{
		image: overtrip,
		title: 'OVERTRIP',
		action: "OverTrip is airdropping a total of 25,000,000 TRIP tokens for completing easy social tasks. Users can complete various tasks, including referrals, social media tasks, and in-game achievements, to earn free points. The more points you accumulate, the greater your chances of earning more TRIP tokens. Invite your friends to get up to 3% of their earnings.",
		value: '25,000,000 TRIP',
		status: 'confirmed',
	},
	{
		image: karak,
		title: 'KARAK',
		action: "Karak has raised $48M in funding from investors like Coinbase and Pantera Capital and has launched an XP campaign. Users who sign up and stake LSTs from Ethereum, Arbitrum or Karak to Karak will earn XPs. Also, earn more XPs from each referral. They don’t have their own token yet but are very likely to launch one in the future. The XPs would likely be converted to their token if the token goes live.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: debridge,
		title: 'deBridge',
		action: "deBridge has raised $5.5M in funding from investors like Animoca Brands and ParaFi Capital and has also launched a points campaign. Users who make swaps on their cross-chain bridge can earn points based on their volume. Also, earn 25% of the points from each referral. They have announced the launch of their governance token “DBR” and has allocated 20% of the total supply for community & launch. They’ve also confirmed to allocate an undisclosed percentage of the supply for “Genesis community airdrop”. Early users who use the bridge and collect points will get the airdrop when their token goes live.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: solv,
		title: 'SOLV PROTOCOL',
		action: "Solv Protocol has raised $11M in funding from investors like Binance Labs and Apollo Capital and has launched an XP campaign. They’ve also confirmed to launch their token “SOLV” and do an airdrop of SOLV tokens for users who collect XPs. Deposit tokens and collect XPs to be eligible for the airdrop when the token goes live. You can also earn 10% of the XPs from each referral.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: sophon,
		title: 'SOPHON',
		action: "Sophon has raised $10 million in a funding round from Paper Ventures, Maven 11 Capital, The Spartan Group, SevenX Ventures, OKX Ventures, and HTX Ventures. The team has also announced partnerships with Beam and Aethir Cloud.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: moongate,
		title: 'MOONGATE',
		action: "Moongate has confirmed to launch their token “MGT” and plans to airdrop to users who participate in their airdrop campaign. Sign up for the open v2 beta of Moongate’s platform and engage in various quests. Participants engaging with Moongate’s beta platform will be eligible for an airdrop upon the official launch of the MGT Token.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: zoth,
		title: 'ZOTH',
		action: "Zoth has raised $2.5M in funding from investors like Blockchain Founders Fund and Wormhole and is airdropping 20,000,000 ZOTH to the testnet airdrop participants. Join the testnet campaign and complete simple tasks to earn XPs. Invite your friends to earn more XPs. The amount of XPs you earn will determine your share of the ZOTH airdrop.",
		value: '20,000,000 ZOTH',
		status: 'confirmed',
	},
	{
		image: zkpass,
		title: 'ZKPASS',
		action: "zkPass has raised $2.5 million from investors including Sequoia China, Binance Labs, and OKX Ventures. zkPass is airdropping free ZKP credits to its airdrop participants. Visit their campaign page, sign up, and complete easy social tasks to earn free $ZKP credits.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: ambient,
		title: 'AMBIENT',
		action: "Ambient has raised a total of $6.5M from investors like Circle and Naval Ravikant and has launched a points system. They don’t have their own token yet but could launch their own token in the future. Early users who trade on the platform and collect points may get an airdrop if they launch their token. They’ve also allocated 100% of the Blast airdrop they receive to its users.",
		value: 'n/a',
		status: 'unconfirmed',
	},
	{
		image: notional,
		title: 'NOTIONAL',
		action: "Notional is airdropping 0.75% of the total supply to various early users of the platform. A snapshot was taken on July 4th, 2021 at 00:00 GMT and users who have borrowed, lent or provided liquidity more than or equal to 50 DAI/USDC as of the snapshot date are eligible to claim between 600 NOTE and 1800 NOTE.",
		value: '0.75% of the total supply',
		status: 'confirmed',
	},
	{
		image: memecoin,
		title: 'MEMECOIN',
		action: "Memecoin has airdropped MEME to users who’ve participated in the Memecoin farming campaign. Users who’ve participated in the airdrop campaign have now received the tokens. There’s no claim required as the amount has already been staked on Stakeland.",
		value: '25% of the total supply',
		status: 'confirmed',
	},
	{
		image: nyan,
		title: 'Nyan Heroes',
		action: "Nyan Heroes has raised funding from investors like Mechanism Capital and Delphi Ventures and has launched Season 2 of the airdrop campaign. Sign up for the airdrop and complete simple tasks to earn CATNIP points. Also, earn 20 CATNIP from each referral. Users who’ve collected MEOW points from Season 1 and users who continue to collect CATNIP from Season 2 will get NYAN tokens after the token goes live.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: zyfi,
		title: 'Zyfi',
		action: "Zyfi has launched a quest program and allocated 10% of the total supply to the community, including for the quest participants. Join the campaign and complete simple tasks to earn points. You’ll also get 10% of the points from each referral. Users who join the campaign and collect points will get an airdrop when their token goes live.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: xtreme,
		title: 'Xtremeverse',
		action: "Xtremeverse has raised $6M in funding from investors like Hashed Emergent and Yield Guild Games and has launched a points campaign. Connect your wallet and Twitter to start earning points. Hold their NFT token “XTREME” to earn additional points. Also get 100 points from each referral. They’ve confirmed to launch “XVERSE” token in the future and do an airdrop to users who collect points.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: phaver,
		title: 'Phaver',
		action: "Phaver is airdropping 3% of the total supply of SOCIAL tokens to airdrop participants. Users who’ve connected a Lens profile, Farcaster profile, and at least one Cred item to Phaver and reach at least Level 2 in the app are eligible to receive points. The points will be converted to SOCIAL tokens at 1:1 ratio after TGE.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: htx,
		title: 'HTX',
		action: "HTX is a leading global digital asset financial service provider. Its accumulative turnover has exceeded 1.2 trillion USD and once became the world's largest digital asset exchange with a global share of 50%.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: ethana,
		title: 'ETHENA',
		action: "Ethena is airdropping 5% of the total supply of ENA tokens to users who interacted with Ethena and collected shards. Users who collected shards until April 1st, 2023 are eligible for the airdrop. Season 2 of the airdrop campaign has also begun, which will airdrop at least 10% of the total supply and continue until September 2nd, 2024 (or when the USDe supply hits $5 billion). In Season 2, “Shards” have been replaced with “Sats”.",
		value: '15% of the total supply',
		status: 'confirmed',
	},
	{
		image: cryptopia,
		title: 'CRYPTOPIA',
		action: "Cryptopia is airdropping 25,000,000 TOS tokens to airdrop participants. Complete easy social tasks, participate in missions, accomplish milestones, and invite your friends to earn free power points. Maximize your points by completing more tasks to increase your share of the TOS tokens.",
		value: '87,500 USD',
		status: 'confirmed',
	},
	{
		image: aperture,
		title: 'Aperture Finance',
		action: "Aperture Finance has raised $5.3M in funding from investors like ParaFI Capital and MEXC and has launched a confirmed airdrop campaign. They will be airdropping 7% of the total supply of APTR tokens to users who join the airdrop campaign. Sign up for the campaign and collect points to be eligible. Also, get up to 20% of the points from each referral. The points will be converted to APTR tokens after TGE.",
		value: '',
		status: 'confirmed',
	},
	{
		image: blackwing,
		title: 'Blackwing',
		action: "Blackwing has raised $4.5M in funding from investors like Hashed and Aptos has launched an XP campaign. Users who deposit tokens will earn XP in the form of BXP. Get 10 BXP for each referral who signs up with your link and deposits at least $10. You’ll also receive an additional 10% of the BXP earned by each referral. They’ve confirmed to do an airdrop to users who collect BXPs.",
		value: '',
		status: 'confirmed',
	},
	{
		image: drift,
		title: 'Drift Protocol',
		action: "Drift Protocol will be airdropping 120M DRIFT tokens to eligible participants. Users who’ve used Drift v1 or v2, users who joined the Drift point program, and Drift Keepers who have matched at least $1,000 in aggregate volume are eligible to claim the airdrop. Users can now check their eligibility, and the claim will go live at a later date.",
		value: '',
		status: '',
	},
	{
		image: eigen,
		title: 'EigenLayer',
		action: "EigenLayer is airdropping 15% of the total supply of EIGEN tokens for airdrops across all seasons. Season 1 Phase 1 is live now, where 6.05% of the total supply has been allocated to users who’ve restaked ETH or LSTs on EigenLayer by March 15, 2024. Phase 2 will start in mid-June where the remaining 0.70% of Season 1 airdrop will be distributed. The remaining allocation of 8.25% from the airdrop supply will be airdropped in subsequent seasons",
		value: '',
		status: 'featured',
	},
	{
		image: imutable,
		title: 'Immutable',
		action: "Immutable is conducting an airdrop program worth up to $50M for users who join quests, play games, and own collectables. First, join the main quest and collect daily gems. Then, play the games as mentioned on the rewards page to earn additional rewards. The exact rewards for joining the main quest campaign have not been revealed yet, but you will likely receive IMX tokens as rewards. Also complete Immutable zkEVM to earn game tokens and unique in-game NFTs.",
		value: '$50M',
		status: 'confirmed',
	},
	{
		image: kamino,
		title: 'Kamino',
		action: "Kamino is airdropping “KMNO” tokens to Season 1 users. Users who participated in Season 1 of the points campaign and earned Kamino points on the platform are eligible to claim free KMNO tokens. A total of 7% of the total supply has been allocated for the Season 1 airdrop. The snapshot of the eligible Season 1 users was taken on March 31st. Season 2 has also begun and will run for 90 days, so users can continue earning points for future airdrops.",
		value: 'n/a',
		status: '',
	},
	{
		image: lunastorm,
		title: 'LunarStorm',
		action: "LunarStorm is airdropping a total of $1,000,000 worth of LUST tokens for their airdrop participants. The LUST token is already tradeable on the XT.com exchange. Visit the airdrop page and complete easy social tasks to earn free XP. The team has also unveiled plans to roll out new platform features, introduce on-platform rewards and quests, platform governance, and more.",
		value: '$1,000,000',
		status: 'confirmed',
	},
	{
		image: masa,
		title: 'Masa',
		action: "Masa is airdropping 59,000,000 MASA to users who have participated in multiple airdrop campaigns. Users who have participated in the “Masa Early Adopter Airdrop”, “Masa Airdrop Quest”, and/or “Masa Node Operator Program” are eligible for the airdrop. Eligible users can select the lock-up period and claim the airdrop starting from May 11th. The longer you lock up, the higher the bonus you’ll receive. You can earn up to a 44% bonus in MASA tokens.",
		value: '9,000,000 MASA',
		status: 'confirmed',
	},
	{
		image: mode,
		title: 'Mode',
		action: "Mode is airdropping 550,000,000 MODE to users who participated in Season 1 of the airdrop campaign. Users who participated in Season 1 of the airdrop by signing up, bridging tokens, and collecting at least 250 points are eligible to claim the airdrop. Eligible users have 30 days to claim the tokens. Season 2 of the campaign has also begun and they’ve allocated 500,000,000 MODE and up to 1,000,000 OP to Season 2 participants. Continue collecting points on Mode to be eligible for Season 2.",
		value: '550,000,000',
		status: 'confirmed',
	},
	{
		image: myth,
		title: 'MYTH',
		action: "MYTH is a Web3 digital entertainment and GameFi ecosystem. MYTH's mission is to transition pre-existing Web2.0 brands and intellectual properties into the Web3 space through game development, gamified and metaverse experiences, and digital collectibles.",
		value: '6,250,000 MYTHx',
		status: 'confirmed',
	},
	{
		image: primex,
		title: 'Primex',
		action: "Primex Finance is a non-custodial prime brokerage protocol that enables the use of lender liquidity for leverage across other DeFi protocols to amplify yield, the uses cases include leveraged LPing, spot trading on DEXs, liquid staking and more. The Primex v1 already enables leveraged trading on DEXs like Uniswap, Balancer, Curve and others, delivering CEX-like user experience (position management, TP/SL, limit orders, limit swaps) and unlimited number of assets and their combinations to trade with leverage. ",
		value: '30,000,000 ePMX',
		status: 'confirmed',
	},
	{
		image: raiinmaker,
		title: 'Raiinmaker',
		action: "Raiinmaker is airdropping free COIIN to users who sign up and complete simple tasks. Create an account at COIIN and claim a wallet, download the Raiinmaker app and register as validator, link your Raiinmaker account with COIIN and also complete the simple social tasks to earn free COIIN tokens.",
		value: 'n/a',
		status: 'featured',
	},
	{
		image: renzo,
		title: 'Renzo',
		action: "Renzo is a liquid derivative platform built on EigenLayer. It is backed by Binance Labs and has recently raised $3.2 million from investors like Maven 11 Capital, OKX Ventures, and others. Renzo is airdropping 7% of the token supply to its participants. Users can now begin claiming their REZ. The claim window will be open for 30 days. Additionally, the second round of the airdrop has begun.",
		value: '',
		status: 'confirmed',
	},
	{
		image: revolving,
		title: 'Revolving Games',
		action: "Revolving Games has raised $25 million from backers including Gala Games, Pantera Capital, Animoca Brands, Polygon, Dapper Labs, Permanens Capital Partners, and others. They are airdropping free points for completing easy social media tasks. Revolving Games has confirmed that the quest points will help users get RCADE tokens.",
		value: '',
		status: 'confirmed',
	},
	{
		image: saltwater,
		title: 'Saltwater Games',
		action: "Saltwater Games has raised $5.5M in funding from investors Deus X Capital and Fourth Revolution and has launched a points campaign. Users who sign up and complete quests will earn points in the form of tXR. Also earn 150 tXR for each referral. tXR will be converted to XR token after the token goes live.",
		value: '$5.5M',
		status: 'confirmed',
	},
	{
		image: entangle,
		title: 'Entangle',
		action: "Entagle is airdropping 10,000,000 NGL tokens to various early testnet and community members. Users who’ve participated in testnets, validator runners on Entangle’s testnet, webverse stakers and users who received the “Airdrop Whitelist” role on Entangle’s discord are eligible for the airdrop.",
		value: '10,000,000 NGL',
		status: 'confirmed',
	},
	{
		image: ethermail,
		title: 'EtherMail',
		action: "EtherMail is airdropping 250 EMC to users who sign up for the airdrop. Create an account at EtherMail by connecting your wallet and leave a secondary email to receive 250 EMC. Also get 250 EMC for each referral. All rewards will initially be allocated in EMC and will be converted to $EMT after the token launch.",
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: zksync,
		title: 'ZKSYNC',
		action: "zkSync has raised a total of $458 million from leading investors like Blockchain Capital and Dragonfly Capital. They’ve hinted that they will launch their native token in the future, so trying out their mainnet and testnet may make you eligible for an airdrop when they launch their token. We highly recommend you to do transactions on a regular basis to increase your chances to become eligible, like every month or week for example.",
		value: 'n/a',
		status: 'confirmed',
	},
];

export default function Airdrop() {
    const [selectedToken, setSelectedToken] = useState(null);

    const handleTokenClick = (token) => {
        setSelectedToken(token);
    };

    const closeModal = () => {
        setSelectedToken(null);
    };

    return (
        <section className='w-full h-full'>
            <section className='w-[90%] h-full mx-auto'>
                <section style={{marginTop: '9rem'}}>
                    <h2 className='mb-4 text-2xl md:text-[2.5rem]'>Latest Airdrops.</h2>
                    <p className='text-sm mb-4'>
                        Here you will find the most recent airdrop campaigns. <br /> Connect and get access to all available airdrops!
                    </p>
                </section>
                <section className='w-full flex items-center justify-between flex-wrap'>
                    {data.map((token, index) => (
                        <section
                            key={index}
                            className='mb-8 w-full sm:w-[15rem] sm:h-[8rem] md:w-[15rem] md:h-[8rem] p-2'
                            onClick={() => handleTokenClick(token)}>
                            <div className='flex items-center justify-between w-full' style={{borderBottom: '1px solid #010d1ab8', paddingBottom: '2rem'}}>
                                <div>
                                    <Image
                                        src={token.image}
                                        alt='airdrop logo'
                                        width={0}
                                        height={0}
                                        sizes='100%'
                                        style={{
                                            width: '5rem',
                                            height: 'auto',
                                            borderRadius: '50%',
                                        }}
                                    />
                                </div>
                                <div className='flex items-end md:items-start flex-col justify-start'>
                                    <div>{token.title}</div>
                                    <div className='flex items-center justify-start gap-2 text-xs'>
                                        {/* action: {token.action} */}
                                    </div>
                                    <div className='flex items-center justify-center gap-2 text-xs'>
                                        value: {token.value}
                                    </div>
									<div className='flex items-center justify-center gap-2 text-xs'>
										<button className="text-blue italic bg-tetiary px-1 rounded-xl my-3">more info...</button>
                                    </div>
                                </div>
                            </div>
                            <div className='text-green italic mt-2'>{token.status}</div>
                        </section>
                    ))}
                </section>
            </section>
            {selectedToken && <Modal onClose={closeModal} token={selectedToken} />}
        </section>
    );
}
