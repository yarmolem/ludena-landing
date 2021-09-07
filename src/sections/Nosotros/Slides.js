// styles
import styles from './nosotros.module.scss'

export const Slide1 = () => {
  return (
    <div className={styles.nosotros_item1}>
      <p>
        Somos una boutique legal especializada en solución de controversias con
        un enfoque en Derecho Militar – Policial, lo cual nos permite ser
        eficientes en la solución de necesidades de nuestros clientes: Oficiales
        y Suboficiales de las Fuerzas Armadas y PNP.
      </p>

      <p>
        Nuestra estrategia de éxito consiste en brindarte un seguro de defensa
        jurídica a un precio competitivo y con cobertura total ante cualquier
        problema legal que puedas tener. Queremos protegerte hablando un
        lenguaje claro y cercano, salvaguardando tu interés ante cualquier
        situación que pueda vulnerar tus bienes o derechos
      </p>
    </div>
  )
}
export const Slide2 = () => {
  return (
    <div className={styles.nosotros_item2}>
      <p>
        Nuestra firma está liderada por la abogada procesalista Ana Claudia
        Ludeña Bejarano, quien respalda el Estudio con más de 6 años de
        experiencia en el ejercicio profesional vinculados al ámbito militar -
        policial.
      </p>

      <div>
        <h1>1</h1>
        <span>
          Abogada – Universidad Nacional Mayor de San Marcos{' '}
          <strong>(Perú)</strong>
        </span>
      </div>
      <div>
        <h1>2</h1>
        <span>
          Maestría en Derecho Procesal – UNMSM <strong>(Perú)</strong>
        </span>
      </div>
      <div>
        <h1>3</h1>
        <span>
          Maestría en Litigación Oral – California Western School of Law{' '}
          <strong>(USA)</strong>
        </span>
      </div>
      <div>
        <h1>4</h1>
        <span>
          Especialización en Derecho Disciplinario Militar Policial – Ilustre
          Colegio de Abogados de Lima
        </span>
      </div>
      <div>
        <h1>5</h1>
        <span>
          Especialización en Derecho Administrativo – Pontificia Universidad
          Católica del Perú
        </span>
      </div>
    </div>
  )
}
