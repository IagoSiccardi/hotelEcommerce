import Link from 'next/link'

import styles from './Card.module.css'

const Card = ({ title, image, alt, href }) => {
	return (
		<article className={styles.card}>
			<Link href={href} className={styles.container}>
				<p>{title}</p>
				<div className={styles.imgContainer}>
					<img src={image} alt={alt} />
				</div>
			</Link>
		</article>
	)
}

export default Card
