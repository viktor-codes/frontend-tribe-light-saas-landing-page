import Image from 'next/image'
import productImage from '../assets/product-image.png'
export const ProductShowcase = () => {
	return (
		<section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 '>
			<div className='container'>
				<div className='flex-2 justify-center'>
					<div className='tag'>Boost Your productivity</div>
				</div>
				<h2 className='text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>
					A more effective way to track progress
				</h2>
				<p className='text-center'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet
					reprehenderit inventore blanditiis libero asperiores. Ex, pariatur
					fuga quidem itaque accusantium sit facere autem necessitatibus dolorum
					veniam, eius hic aliquid.
				</p>
				<Image src={productImage} alt='Product Image' className='' />
			</div>
		</section>
	)
}
