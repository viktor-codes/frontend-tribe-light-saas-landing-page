import Image from 'next/image'
import logo from '../assets/logosaas.png'
import SocialInsta from '../assets/social-insta.svg'
import SocialLinkedIn from '../assets/social-linkedin.svg'
import SocialPin from '../assets/social-pin.svg'
import SocialX from '../assets/social-x.svg'
import SocialYouTube from '../assets/social-youtube.svg'

export const Footer = () => {
	return (
		<footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
			<div className='container'>
				<div className='inline-flex relative before:content-[""] before:h-full before:w-full before:absolute'>
					<Image src={logo} alt='logo' width={40} height={40} />
				</div>
				<nav>
					<a href=''>About</a>
					<a href=''>Features</a>
					<a href=''>Customers</a>
					<a href=''>Pricing</a>
					<a href=''>Help</a>
					<a href=''>Careers</a>
				</nav>
				<div>
					<SocialInsta />
					<SocialLinkedIn />
					<SocialPin />
					<SocialX />
					<SocialYouTube />
				</div>
			</div>
		</footer>
	)
}
