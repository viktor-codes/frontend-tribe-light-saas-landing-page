import { LogoTicker } from '@/sections/LogoTicker'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Pricing } from '../sections/Pricing'
import { ProductShowcase } from '../sections/ProductShowcase'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<LogoTicker />
			<ProductShowcase />
			<Pricing />
		</>
	)
}
