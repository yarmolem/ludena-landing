import { motion } from 'framer-motion'
import styles from './pregunta.module.scss'

const Pregunta = ({ num, label, handleQuestion }) => {
  return (
    <motion.div
      whileHover={{
        x: ['0%', '5%', '0%']
      }}
      onClick={handleQuestion}
      className={styles.pregunta}
    >
      <span>{num}.</span>
      <p>
        {label}
        <span>{'▼'}</span>
      </p>
    </motion.div>
  )
}

export default Pregunta
