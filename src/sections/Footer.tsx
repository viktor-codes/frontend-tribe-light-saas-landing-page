import Image from 'next/image'
import logo from '../assets/logo.svg'

export const Footer = () => {
	return (
		<footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
			<div className='container'>
				<Image src={logo} alt='logo' width={40} height={40} />
				<nav></nav>
			</div>
		</footer>
	)
}
