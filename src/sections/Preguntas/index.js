// components
import Header from '@/components/Header'
import Pregunta from '@/components/Pregunta'

// utils
import { preguntas } from '@/data/preguntas'

import styles from './preguntas.module.scss'

const Preguntas = () => {
  return (
    <div>
      <Header title="PREGUNTAS FRECUENTES" />

      <div className={styles.container}>
        {preguntas.map((p) => (
          <Pregunta key={`pregunta-${p.num}`} {...p} />
        ))}
      </div>
    </div>
  )
}

export default Preguntas
