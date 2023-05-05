'use client'

import { BsStarFill } from 'react-icons/bs'

import styles from './Banner.module.css'

const Banner = () => {
	return (
		<section className={styles.banner}>
			<article className={styles.img}>
				<div>
					<p>Welcome</p>
				</div>
				<div>
					{[...Array(5)].map((a,i) => (
						<BsStarFill key={i + 1}/>
					))}
				</div>
			</article>
		</section>
	)
}

export default Banner
