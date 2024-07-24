import Image from 'next/image'
import ArrowRight from '../assets/arrow-right.svg'
import cogImage from '../assets/cog.png'
import cylinder from '../assets/cylinder.png'

export const Hero = () => {
	return (
		<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom__left,#183EC2,#EAEEFE_66%)]'>
			<div className='container'>
				<div className='md:flex items-center'>
					<div className='md:w-[478px]'>
						<div className='text-sm inline-flex border border-[#222}/10 px-3 py-1 rounded-lg tracking-tight mt-6'>
							Version 2.0 is here
						</div>
						<h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
							Pathway to productivity
						</h1>
						<p className='text-xl text-[#010d3e] tracking-tight mt-6'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nam
							ea explicabo. Exercitationem, natus quasi aperiam mollitia facilis
							sed repudiandae omnis quae beatae quo eligendi laboriosam repellat
							ut quod optio?
						</p>

						<div className='flex items-center gap-1 mt-[30px]'>
							<button className='btn btn-primary'>Get for free</button>
							<button className='btn btn-text gap-1'>
								<span>Learn more</span>
								<ArrowRight className='w-5 h-5' />
							</button>
						</div>
					</div>
					<div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
						<Image
							src={cogImage}
							alt='Cog'
							className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6'
						/>
						<Image
							src={cylinder}
							alt='cylinder'
							width={220}
							height={220}
							className='hidden md:block -top-8 -left-32 md:absolute'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
