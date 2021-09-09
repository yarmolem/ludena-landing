import LinkExterno from '@/components/LinkExterno'
import styles from './publicidad.module.scss'

const Publicidad = ({ isMobile = false, onClose = () => {} }) => {
  const containerStyles = isMobile ? styles.mobile : styles.desktop

  const renderBtnClose = () => (
    <button onClick={onClose} className={styles.btnClose}>
      X
    </button>
  )

  return (
    <div className={`${styles.publicidad} ${containerStyles}`}>
      <img alt="" src="/images/puntitos.svg" className={styles.puntos_right} />
      <img alt="" src="/images/puntitos.svg" className={styles.puntos_left} />
      {!isMobile ? renderBtnClose() : null}
      <div>
        <p className={styles.bold}>ABOGADOS DEFENDIENDO TU VOCACIÓN</p>
        <p>Seguro de Asistencia Legal</p>
        <p className={`${styles.textshadow} ${styles.semibold}`}>
          S/49 mensuales
        </p>
        <LinkExterno>
          <button>OBTEN TU SEGURO</button>
        </LinkExterno>
      </div>
    </div>
  )
}

export default Publicidad
