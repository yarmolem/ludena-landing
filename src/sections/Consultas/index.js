import Header from '@/components/Header'

import styles from './consultas.module.scss'

const Consultas = () => {
  return (
    <div className={styles.consultas}>
      <Header title="¿TIENES MÁS CONSULTAS?" />

      <div className={styles.container}>
        <p>
          Si deseas mayor información de nuestro servicio o deseas hacernos una
          consulta legal, agenda una reunión virtual con nuestros profesionales.
          Tendrá una duración de 30 minutos y es totalmente gratuita. Nuestro
          horario de atención es de lunes a viernes de 10am a 1pm y 3pm a 5pm.
        </p>

        <p>
          En caso desees comentarnos un caso particular y, a fin de brindarte
          las mejores alternativas de solución, te invitamos a adjuntar los
          documentos sustentatorios en la opción “Adjuntar archivo” y así
          analizarlos con anticipación. Mantendremos en estricta reserva la
          información que nos brindes.
        </p>
      </div>

      <form className={styles.form}>
        <div>
          <label htmlFor="">Nombres y apellidos</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Correo</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Celular</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Mensaje</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Rango de horario:</label>
          <input type="text" />
        </div>

        <button type="button">Adjuntar archivo</button>

        <button type="submit">AGENDA TU CITA</button>
      </form>
    </div>
  )
}

export default Consultas
