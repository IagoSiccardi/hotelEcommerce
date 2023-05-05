'use client'

import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
	const icons = [FaInstagram, FaFacebook, FaEnvelope]

	return (
		<footer className={styles.footer}>
			<Link className={styles.ecommerce} href='/'>
				Hotel
			</Link>
			<div className={styles.icons}>
				{icons.map((icon, i) => {
					const Icon = icons[i]
					return <Icon key={i} />
				})}
			</div>
            
			<span className={styles.copy}>Vester Farimagsgade, 1606 København V &copy;Hotel 2023</span>
		</footer>
	)
}

export default Footer
