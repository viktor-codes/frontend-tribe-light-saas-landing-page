'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import productImage from '../assets/product-image.png'
import pyramidImage from '../assets/pyramid.png'
import tubeImage from '../assets/tube.png'

export const ProductShowcase = () => {
	const sectionRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
	return (
		<section
			ref={sectionRef}
			className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'
		>
			<div className='container'>
				<div className='max-w-[540px] mx-auto'>
					<div className='flex-2 justify-center'>
						<div className='tag'>Boost Your productivity</div>
					</div>
					<h2 className='section-title mt-5'>
						A more effective way to track progress
					</h2>
					<p className='section-description mt-5'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet
						reprehenderit inventore blanditiis libero asperiores. Ex, pariatur
						fuga quidem itaque accusantium sit facere autem necessitatibus
						dolorum veniam, eius hic aliquid.
					</p>
				</div>
				<div className='relative'>
					<Image src={productImage} alt='Product Image' className='mt-10' />
					<motion.img
						src={pyramidImage.src}
						alt='Pyramid Image'
						height={262}
						width={262}
						className='hidden md:block absolute -top-32 -right-36'
						style={{
							translateY: translateY,
						}}
					/>
					<motion.img
						src={tubeImage.src}
						alt='Tube Image'
						height={248}
						width={248}
						className='hidden md:block absolute bottom-24 -left-36'
						style={{
							translateY: translateY,
						}}
					/>
				</div>
			</div>
		</section>
	)
}
