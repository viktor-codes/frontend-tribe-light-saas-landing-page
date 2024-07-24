import Image from 'next/image'
import productImage from '../assets/product-image.png'
export const ProductShowcase = () => {
	return (
		<section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 '>
			<div className='container'>
				<div className='tag'>Boost Your productivity</div>
				<h2>A more effective way to track progress</h2>
				<p>
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
