import Contact from '@/components/Contact/Contact'
import styles from './page.module.css'


const page = () => {

	return (
		<main className={styles.main}>
      <h1>¡Envie su consulta!</h1>
			<Contact/>
		</main>
	)
}

export default page
