import Header from '@/components/Header'
import { motion } from 'framer-motion'

// styles
import styles from './elegirnos.module.scss'

const imageVariants = {
  hover: {
    x: ['0%', '5%', '-5%', '0%']
  }
}

const Elegirnos = () => {
  return (
    <div id="elegirnos-section" className={styles.elegirnos}>
      <div className={styles.header}>
        <Header title="POR QUÉ ELEGIRNOS" />
      </div>

      <div className={styles.header_desktop}>
        <h2>POR QUÉ ELEGIRNOS</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <motion.div variants={imageVariants} whileHover="hover">
            <img src="/images/+5.svg" alt="" />
          </motion.div>

          <p>Más de 5 años de experiencia</p>
        </div>
        <div className={styles.grid_item}>
          <motion.div variants={imageVariants} whileHover="hover">
            <img src="/images/mapa_1.svg" alt="" />
          </motion.div>
          <p>Cobertura total en el territorio nacional</p>
        </div>
        <div className={styles.grid_item}>
          <motion.div variants={imageVariants} whileHover="hover">
            <img src="/images/medalla.svg" alt="" />
          </motion.div>
          <p>Especialistas en Derecho Disciplinario</p>
        </div>
        <div className={styles.grid_item}>
          <motion.div variants={imageVariants} whileHover="hover">
            <img src="/images/computadora.svg" alt="" />
          </motion.div>
          <p>100% online </p>
        </div>
      </div>
    </div>
  )
}

export default Elegirnos
