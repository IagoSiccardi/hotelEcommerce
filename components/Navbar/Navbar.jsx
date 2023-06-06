'use client'

import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState } from 'react'

const Navbar = () => {
	const [active, setActive] = useState(false)

	return (
		<header className={styles.header}>
			<Link className={styles.ecommerce} href='/'>
				Hotel
			</Link>
			<section className={styles.section}>
				<ul className={styles.fwUl}>
					<Link href='/habitaciones'>Habitaciones</Link>
					<Link href='/ubicacion'>Ubicacion</Link>
					<Link href='/about'>Sobre nosotros</Link>
					<Link href='/contact'>Contacto</Link>
				</ul>
			</section>
			{active ? (
				<section className={styles.smSection}>
					<ul className={styles.smUl}>
						<Link href='/habitaciones'>Habitaciones</Link>
						<Link href='/ubicacion'>Ubicacion</Link>
						<Link href='/about'>Sobre nosotros</Link>
						<Link href='/contact'>Contacto</Link>
					</ul>
				</section>
			) : null}
			<FaBars size='2rem' onClick={() => setActive(!active)} />
		</header>
	)
}

export default Navbar
