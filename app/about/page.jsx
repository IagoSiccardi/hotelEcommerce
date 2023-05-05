import AboutImage from '@/components/AboutImage/AboutImage'
import styles from './page.module.css'

const page = () => {
	return (
		<main className={styles.container}>
			<section className={styles.description}>
        <div className={styles.descriptionContainer}>
				Bienvenidos al Hotel, un oasis de confort y hospitalidad en el corazón
				de la ciudad Copenhague. Somos un equipo de profesionales apasionados
				por brindarle a nuestros huéspedes una experiencia única e inolvidable
				durante su estancia con nosotros. Nuestro hotel cuenta con 38
				habitaciones elegantemente decoradas y equipadas con todas las
				comodidades modernas que pueda necesitar para una estancia cómoda y
				relajante. Desde nuestra recepción abierta las 24 horas hasta nuestro
				servicio de habitaciones, nuestro equipo siempre estará disponible para
				atender cualquier necesidad que pueda tener. Para los amantes de la
				buena comida, nuestro restaurante ofrece una amplia variedad de platos
				deliciosos y sabrosos preparados con los ingredientes más frescos de la
				región. También contamos con un bar acogedor y elegante donde puede
				relajarse y disfrutar de una bebida refrescante después de un día de
				turismo en la ciudad. Nuestra prioridad es brindarle la mejor
				experiencia posible durante su estancia en la ciudad. Esperamos darle la
				bienvenida pronto y hacer que su estadía sea inolvidable.
        </div>
        <div className={styles.aboutImageContainer}>
			<AboutImage/>
        </div>
			</section>
		</main>
	)
}

export default page
