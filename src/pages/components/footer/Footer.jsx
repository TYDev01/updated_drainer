/* eslint-disable react/no-unescaped-entities */
import {
	FaDiscord,
	FaTwitter,
	FaTelegram,
	FaGithub,
	FaArrowRight,
	FaRegCopyright,
} from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='w-full bg-light'>
			<section className='w-[90%] flex items-center md:items-start justify-center md:justify-between flex-col p-[4%] mx-auto'>
				<section className='flex items-start justify-between flex-wrap w-full'>
					<div className='footer_left'>
						<div className=' footer_logo'>
							<h2 className='text-4xl font-bold'>D-Appsconnect</h2>
						</div>

						<p className='w-[13.6875rem] text-base my-4'>
							do almost everything with D-Appsconnect nft market tools built for
							degens, by degens.
						</p>

						<ul className='flex items-center justify-between text-3xl text-tetiary'>
							<li>
								<FaDiscord />
							</li>
							<li>
								<FaTwitter />
							</li>
							<li>
								<FaTelegram />
							</li>
							<li>
								<FaGithub />
							</li>
						</ul>
					</div>

					<div className='flex items-start justify-between gap-8 flex-col sm:flex-row  sm:mt-3 md:flex-row md:mt-0'>
						<ul className='mb-4 text-lg cursor-pointer '>
							<h4 className='font-bold'>explore</h4>
							<li className='hover:opacity-50'>collection</li>
							<li className='hover:opacity-50'>favorites</li>
							<li className='hover:opacity-50'>wallets</li>
							<li className='hover:opacity-50'>calender</li>
							<li className='hover:opacity-50'>blog</li>
						</ul>

						<ul className='mb-4 text-lg cursor-pointer'>
							<h4 className='font-bold'>create</h4>
							<li className='hover:opacity-50'>marketplace</li>
							<li className='hover:opacity-50'>collections</li>
							<li className='hover:opacity-50'>smart wallets</li>
						</ul>

						<ul className='mb-4 text-lg cursor-pointer'>
							<h4 className='font-bold'>community</h4>
							<li className='hover:opacity-50'>events</li>
							<li className='hover:opacity-50'>learn web3</li>
							<li className='hover:opacity-50'>how-to-nfts</li>
							<li className='hover:opacity-50'>grants</li>
							<li className='hover:opacity-50'>dao-ing</li>
						</ul>
					</div>

					<div className='footer_right text-left md:text-right'>
						<i>
							<h2 className='text-[1.72rem] text-left md:text-right mb-4'>
								know what's up
							</h2>
						</i>
						<form className='flex items-center justify-between bg-[#002953] mb-4 p-4 '>
							<input
								type='text'
								placeholder='your e-mail'
								className='bg-[#002953] outline-none text-white placeholder:text-tetiary'
							/>

							<FaArrowRight className='arrow_right' />
						</form>

						<p className=' font-normal text-[0.825rem] mb-2 flex items-center justify-start md:justify-end gap-2'>
							<FaRegCopyright className='copyright' />
							<span>2024 D-Appsconnect Labs, Inc.</span>
						</p>

						<p>All Rights Reserved</p>
					</div>
				</section>

				<div className='w-full'>
					<h1 className='text-[#003162] font-bold text-center w-full text-[2.118rem] sm:text-[4.45rem]  md:text-[9.75rem] tracking-[0.1rem] sm:tracking-[0.5rem] md:tracking-[0.7rem] '>
						D-Appsconnect
					</h1>
				</div>
			</section>
		</footer>
	);
}
