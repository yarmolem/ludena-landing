import Header from '@/components/Header'

// components
import MembresiaItem from './MembresiaItem'

// data
import { membresias } from '@/data/membresias'

// styles
import styles from './membresias.module.scss'
import LinkExterno from '@/components/LinkExterno'

const Membresias = () => {
  return (
    <div id="membresias-section" className={styles.membresias}>
      <Header title="MEMBRESÍA" />

      <div className={styles.container}>
        <div className={styles.container_content}>
          <p>
            El seguro de asistencia legal otorga prevención y protección ante
            sucesos de relevancia castrense o extracastrense que afecten tus
            derechos o bienes. Tendrás a tu disposición, de manera ilimitada, a
            expertos en la materia sin importar dónde te encuentres a un costo
            mensual de <strong>S/49.</strong> Desarróllate en tu profesión sin
            preocupación porque cuentas con nuestro respaldo.
          </p>
        </div>

        <div className={styles.grid}>
          {membresias.map((m, i) => (
            <MembresiaItem key={`Membresia-${i}`} {...m} />
          ))}
        </div>
        <LinkExterno>
          <button className={styles.button}>HAZ TU CONSULTA</button>
        </LinkExterno>
      </div>
    </div>
  )
}

export default Membresias
