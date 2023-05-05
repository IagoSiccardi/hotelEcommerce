'use client'

import Link from 'next/link'
import styles from './Wpp.module.css'
import { FaWhatsapp } from 'react-icons/fa'

const Wpp = () => {
	return (
		<Link
			href='https://wa.me/5491154901737'
			target='_blank'
			className={styles.wppContainer}
		>
			<FaWhatsapp size='2.5rem'/>
		</Link>
	)
}

export default Wpp
