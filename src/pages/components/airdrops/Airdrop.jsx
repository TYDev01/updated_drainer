import Image from 'next/image';
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

// import { TiSpanner } from 'react-icons/ti';
// import { GrCurrency } from 'react-icons/gr';

const data = [
	{
		image: another,
		title: 'Another-1',
		action: '',
		value: 'n/a',
		status: 'confirmed',
	},

	{
		image: aperture,
		title: 'Aperture Finance',
		action: 'collect points',
		value: '',
		status: 'confirmed',
	},
	{
		image: blackwing,
		title: 'Blackwing',
		action: 'collect BXP',
		value: '',
		status: 'confirmed',
	},
	{
		image: drift,
		title: 'Drift Protocol',
		action: 'check eligibility',
		value: '',
		status: '',
	},
	{
		image: eigen,
		title: 'EigenLayer',
		action: 'stake tokens',
		value: '',
		status: '',
	},
	{
		image: imutable,
		title: 'Immutable',
		action: 'collect gems',
		value: '',
		status: 'confirmed',
	},
	{
		image: kamino,
		title: 'Kamino',
		action: ' claim now',
		value: '',
		status: '',
	},
	{
		image: lunastorm,
		title: 'LunarStorm',
		action: '',
		value: 'n/a',
		status: 'featured',
	},
	{
		image: mode,
		title: 'Mode',
		action: 'bridge',
		value: '',
		status: 'confirmed',
	},
	{
		image: myth,
		title: 'MYTH',
		action: 'collect points',
		value: '',
		status: 'confirmed',
	},
	{
		image: primex,
		title: 'Primex',
		action: '',
		value: 'n/a',
		status: 'featured',
	},
	{
		image: raiinmaker,
		title: 'Raiinmaker',
		action: '',
		value: 'n/a',
		status: 'featured',
	},
	{
		image: renzo,
		title: 'Renzo',
		action: 'Deposit ETH',
		value: '',
		status: 'confirmed',
	},
	{
		image: revolving,
		title: 'Revolving Games',
		action: 'earn points',
		value: '',
		status: 'confirmed',
	},
	{
		image: saltwater,
		title: 'Saltwater Games',
		action: '',
		value: 'n/a',
		status: '',
	},
	{
		image: uprock,
		title: 'UpRock',
		action: '',
		value: 'n/a',
		status: '',
	},
];

export default function Airdrop() {
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
					{data.map(({ image, title, action, value, status }, index) => {
						return (
							<section
								key={index}
								className='mb-8 w-full sm:w-[15rem] sm:h-[8rem] md:w-[15rem] md:h-[8rem] p-2'>
								<div className='flex items-center justify-between w-full' style={{borderBottom: '1px solid #010d1ab8', paddingBottom: '2rem'}}>
									<div className=''>
										<Image
											src={image}
											alt='airdrop logo'
											width={0}
											height={0}
											sizes='100%'
											style={{
												width: '5rem ',
												height: 'auto',
												borderRadius: '50%',
											}}
										/>
									</div>

									<div className='flex items-end md:items-start flex-col justify-start'>
										<div className=''>{title}</div>
										<div className='flex items-center justify-start gap-2 text-xs'>
											{/* <TiSpanner /> */}
											action: {action}
										</div>
										<div className='flex items-center justify-center gap-2 text-xs'>
											{/* <GrCurrency /> */}
											value: {value}
										</div>
									</div>
								</div>
								<div className='text-green italic mt-2'>{status}</div>
							</section>
						);
					})}
				</section>
			</section>
		</section>
	);
}
