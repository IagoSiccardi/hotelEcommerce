'use client'
import styles from './Services.module.css'
import { FaWifi, FaConciergeBell, FaCoffee, FaUtensils, FaParking } from 'react-icons/fa'

const Services = () => {
	const icons = [FaWifi, FaConciergeBell, FaCoffee, FaUtensils, FaParking]
	return (
		<>
			{icons.map((icon, i) => {
				const Icon = icons[i]

				return (
					<div key={i} className={styles.iconContainer}>
						<Icon />
					</div>
				)
			})}
		</>
	)
}

export default Services
