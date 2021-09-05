import Header from '@/components/Header'

// styles
import styles from './elegirnos.module.scss'

const Elegirnos = () => {
  return (
    <div className={styles.elegirnos}>
      <Header title="POR QUÉ ELEGIRNOS" />

      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <div>
            <img src="/images/+5.svg" alt="" />
          </div>

          <p>Más de 5 años de experiencia</p>
        </div>
        <div className={styles.grid_item}>
          <div>
            <img src="/images/mapa_1.svg" alt="" />
          </div>
          <p>Cobertura total en el territorio nacional</p>
        </div>
        <div className={styles.grid_item}>
          <div>
            <img src="/images/medalla.svg" alt="" />
          </div>
          <p>Especialistas en Derecho Disciplinario</p>
        </div>
        <div className={styles.grid_item}>
          <div>
            <img src="/images/computadora.svg" alt="" />
          </div>
          <p>100% online </p>
        </div>
      </div>
    </div>
  )
}

export default Elegirnos
