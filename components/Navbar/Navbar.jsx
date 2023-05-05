import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={styles.header}>
        <section className={styles.section}>
        <Link className={styles.ecommerce} href='/'>Hotel</Link>
        <ul>
            <Link href='/habitaciones'>Habitaciones</Link>
            <Link href='/ubicacion'>Ubicacion</Link>
            <Link href='/about'>Sobre nosotros</Link>
            <Link href='/contact'>Contacto</Link>

        </ul>
        </section>
    </header>
  )
}

export default Navbar