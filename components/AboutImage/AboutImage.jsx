'use client'

import { useState } from 'react'
import styles from './AboutImage.module.css'

const AboutImage = () => {

	const [mainImage, setMainImage] = useState(0)

	const images = [
		{
			id: 1,
			alt: 'Hotel view',
			path: '/hotel.jpg',
		},
		{
			id: 2,
			alt: 'Hotel Room view',
			path: '/room.jpg',
		},

		{
			id: 3,
			alt: 'Restaurant view',
			path: '/restaurant.jpg',
		},
	]

	return (
		<section className={styles.imagesSection}>
			<div className={styles.mainImage}>
				<img src={images[mainImage].path} alt={images[mainImage].alt} />
			</div>
			<div className={styles.images}>
				{images.map((image, i) => {
					return (
						<img src={images[i].path} alt={images[i].alt} key={images[i].id} onClick={() => setMainImage(i)}/>
					)
				})}
			</div>
		</section>
	)
}

export default AboutImage
