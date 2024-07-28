import Image from 'next/image'
import logo from '../assets/logo.svg'
import SocialInsta from '../assets/social-insta.svg'
import SocialLinkedIn from '../assets/social-linkedin.svg'
import SocialPin from '../assets/social-pin.svg'
import SocialX from '../assets/social-x.svg'
import SocialYouTube from '../assets/social-youtube.svg'

export const Footer = () => {
	return (
		<footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
			<div className='container'>
				<Image src={logo} alt='logo' width={40} height={40} />
				<nav>
					<a href=''>About</a>
					<a href=''>Features</a>
					<a href=''>Customers</a>
					<a href=''>Pricing</a>
					<a href=''>Help</a>
					<a href=''>Careers</a>
				</nav>
				<div>
					<Image src={SocialX} alt='social-x' width={20} height={20} />
					<Image src={SocialInsta} alt='social-insta' width={20} height={20} />
					<Image
						src={SocialLinkedIn}
						alt='social-linkedin'
						width={20}
						height={20}
					/>
					<Image src={SocialPin} alt='social-pin' width={20} height={20} />
					<Image
						src={SocialYouTube}
						alt='social-youtube'
						width={20}
						height={20}
					/>
				</div>
			</div>
		</footer>
	)
}
