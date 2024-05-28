import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../newmodal/Newmodal';

import another from '../../../../public/another.png';
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
import uprock from '../../../../public/uprock.jpg';
import masa from '../../../../public/masa.jpg';
import zksync from '../../../../public/zkSync-logo-1.jpg';
import ethermail from '../../../../public/EtherMail-logo.png';
import xtreme from '../../../../public/Xtremeverse-logo.png';
import zyfi from '../../../../public/Zyfi-logo.jpg';
import nyan from '../../../../public/rhPh2p8V_400x400.png';

const data = [
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
		action: '',
		value: 'n/a',
		status: 'confirmed',
	},
	{
		image: uprock,
		title: 'UpRock',
		action: '',
		value: 'n/a',
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
