import Header from '@/components/Header'

// styles
import styles from './membresias.module.scss'

const Membresias = () => {
  return (
    <div className={styles.membresias}>
      <Header title="MEMBRESÍA" />

      <div className={styles.container}>
        <div className={styles.container_content}>
          <p>
            El seguro de asistencia jurídica otorga prevención y protección ante
            sucesos de relevancia castrense o extracastrense que afecten tus
            derechos o bienes. Tendrás a tu disposición, de manera ilimitada, a
            expertos en la materia sin importar dónde te encuentres a un costo
            mensual de <strong>S/49.90.</strong> Desarróllate en tu profesión
            sin preocupación porque cuentas con nuestro respaldo.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.grid_item}>
            <img src="/images/mapa.svg" alt="" />
            <span>Cobertura en todo el territorio nacional</span>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/calendario.svg" alt="" />
            <span>Asistencia jurídica 24/7</span>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/check.svg" alt="" />
            <span>Revisión y redacción de documentos, contratos y afines</span>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/carpeta.svg" alt="" />
            <span>Informes mensuales</span>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/manos.svg" alt="" />
            <span>
              Patrocinio en asuntos administrativos, disciplinarios, familia y
              judiciales.
            </span>
          </div>
          <div className={styles.grid_item}>
            <img src="/images/estudiante.svg" alt="" />
            <span>Beca completa de estudios para un familiar</span>
          </div>
        </div>

        <button className={styles.button}>AGENDA TU CITA</button>
      </div>
    </div>
  )
}

export default Membresias
