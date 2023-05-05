import Link from 'next/link'
import styles from './HotelDescription.module.css'
const HotelDescription = () => {
	return (
		<article className={styles.descriptionContainer}>
			<p className={styles.description}>
				Convenientemente ubicado cerca de las principales
				atracciones turísticas, así como de tiendas, restaurantes y transporte
				público, lo que lo convierte en el lugar ideal para hospedarse en su
				próxima visita. Nuestro amable y atento personal está disponible las 24
				horas para asegurarse de que tenga una estancia memorable. ¡Esperamos
				darle la bienvenida pronto a nuestro hotel en este encantador destino
				escandinavo!
			</p>
			<Link className={styles.descriptionButton} href='/about'>
				Sobre nosotros
			</Link>
		</article>
	)
}

export default HotelDescription
