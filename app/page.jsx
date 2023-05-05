import styles from './page.module.css'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'
import Card from '@/components/HomeCards/Card'
import HotelDescription from '@/components/HotelDescription/HotelDescription'
import Services from '@/components/Services/Services'

const getData = async () => {
	try {
		const res = await fetch(`${process.env.DB_HOST}/api/cards`, {
			next: { revalidate: 60 },
		})
		return res.json()
	} catch (error) {
		throw new Error('Failed to fetch data')
	}
}

const page = async () => {
	const cards = await getData()

	return (
		<>
		<Banner />
		<main className={styles.main}>
			<section className={styles.cardsSection} >
				{cards.data.map(({ id, title, image, alt, href }) => {
					return <Card id={id} title={title} image={image} alt={alt} key={id} href={href}/>
				})}
			</section>
			<section>
				<HotelDescription/>
			</section>
			<section className={styles.servicesSection}>
				<Services/>
			</section>
			<section className={styles.descriptionSection}>
				<Description/>
			</section>
		</main>
		</>
	)
}

export default page
