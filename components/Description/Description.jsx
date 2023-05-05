import styles from './Description.module.css'

const Description = () => {
	return (
		<article className={styles.descriptionArticle}>
			<div className={styles.imgContainer}>
				<img
					src='/copenhague.jpg'
					alt='Vista area de la ciudad de Copenhague.'
				/>
			</div>
			<div className={styles.description}>
			Copenhague, la ciudad donde vivió y escribió Hans Christian Andersen, parece un cuento de hadas: Puentes de piedra medievales que cruzan canales bordeados por filas de casas multicolores, calles adoquinadas cada vez más estrechas, entre venerables iglesias luteranas y palacios renacentistas. Esta ciudad escandinava es mucho más que eso, en los últimos años se ha transformado en una de las capitales más vibrantes de Europa, donde el diseño, el cine y la música han creado un ambiente joven e innovador; aquí es casi imposible no sentirse a gusto. ¿Pequeña? Tiene poco más de medio millón de habitantes. Es difícil encontrar edificios de menos de cinco pisos, la capital danesa es una urbe ideal para visitar en un fin de semana: legado histórico, para quienes disfrutan de los museos y la historia, y energía en movimiento para los buscadores de la última tendencia.
			</div>
		</article>
	)
}

export default Description
