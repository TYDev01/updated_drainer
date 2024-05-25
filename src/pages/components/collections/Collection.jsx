import { MdVerified } from 'react-icons/md';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

import Image from 'next/image';
import clonex from '../../../../public/clonex.png';
import azuki from '../../../../public/azuki.png';
import digi from '../../../../public/digi.png';
import renga from '../../../../public/renga.png';
import HD from '../../../../public/HD.png';
import doodles from '../../../../public/doodles.png';
import deGods from '../../../../public/deGods.png';
import underground from '../../../../public/underground.png';


const data = [
	{
		image: clonex,
		title: 'Clone x - x Takashhi Murak...',
		price: '8.4 ETH',
		volume: '100.5 ETH',
		value: -8,
	},

	{
		image: azuki,
		title: 'Azuki',
		price: '11.55 ETH',
		volume: '129.15 ETH',
		value: +10,
	},
	{
		image: digi,
		title: 'DigiDaigaku Genesis',
		price: '10.9 ETH',
		volume: '120 ETH',
		value: -19,
	},
	{
		image: renga,
		title: 'RENGA',
		price: '1.05 ETH',
		volume: '46.1 ETH',
		value: +17,
	},
	{
		image: HD,
		title: 'HD',
		price: '0.7 ETH',
		volume: '38.5 ETH',
		value: +22,
	},
	{
		image: doodles,
		title: 'Doodles',
		price: '6.5 ETH',
		volume: '68.95 ETH',
		value: -5,
	},
	{
		image: deGods,
		title: 'DeGods',
		price: '560 SOL',
		volume: '5.2k SOL',
		value: +8,
	},
	{
		image: underground,
		title: 'Underground Pass',
		price: '7.25 ETH',
		volume: '46.1 ETH',
		value: +3,
	},
];

export default function Collection() {
	return (
		<section className='w-full h-full'>
			<section className='w-[90%] h-full mx-auto'>
				<section style={{marginTop: '9rem'}}>
					<h2 className='mb-4 text-2xl md:text-[2.5rem]'>
						Trending collections
					</h2>
					<p className='text-sm mb-4'>
						see what’s trending in the market based on floor price, volume, etc.
					</p>
				</section>

				<section className='w-full flex items-center justify-between flex-wrap'>
					{data.map(({ image, title, price, volume, value }, index) => {
						return (
							<section
								key={index}
								className='mb-8 w-full sm:w-[18rem] md:w-[17.9rem]'>
								<div className='w-full sm:w-[18rem] md:w-[17.75rem] '>
									<Image
										src={image}
										alt='collection image'
										width={0}
										height={0}
										sizes='100%'
										style={{ width: '100%', height: 'auto' }}
									/>
								</div>

								<div className=''>
									<h3 className='flex items-center gap-2 text-[1.15rem] font-semibold my-2'>
										{title}
										<MdVerified className='text-green' />
									</h3>
								</div>

								<div className='flex items-center justify-between '>
									<h5 className='flex items-start justify-center flex-col text-[0.775rem] text-tetiary'>
										floor price{' '}
										<span className='text-base text-white'>{price}</span>
									</h5>

									<h5 className='flex items-start justify-center flex-col text-[0.775rem] text-tetiary'>
										floor price{' '}
										<span className='text-base text-white'>{volume}</span>
									</h5>

									<small className={`text-${value > 0 ? 'green' : 'red'} mt-4`}>
										{value}%
									</small>

									<BsArrowUpRightCircleFill className='text-xl text-secondary mt-4' />
								</div>
							</section>
						);
					})}
				</section>
			</section>
		</section>
	);
}
