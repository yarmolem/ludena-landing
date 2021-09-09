import Spinner from '@/components/Spinner'
import styles from './consultas.module.scss'
// import { horarios } from './horarios'

const initialState = {
  nombres: '',
  email: '',
  mensaje: '',
  celular: ''
  // rangoHorario: ''
}

const FormMobile = ({
  loading,
  isEmpty,
  form = initialState,
  handleFile = () => {},
  handleChange = () => {},
  handleSubmit = () => {}
}) => {
  // const renderOptions = () => {
  //   return horarios.map(({ label, value }, i) => (
  //     <option key={`horario-item-${value}-${i}`} value={value}>
  //       {label}
  //     </option>
  //   ))
  // }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
      className={styles.form_mobile}
    >
      <div>
        <label htmlFor="nombres_mobile">Nombres y apellidos</label>
        <input
          required
          id="nombres_mobile"
          type="text"
          name="nombres"
          value={form.nombres}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email_mobile">Correo</label>
        <input
          required
          id="email_mobile"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="celular_mobile">Celular</label>
        <input
          required
          id="celular_mobile"
          type="number"
          name="celular"
          value={form.celular}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mensaje_mobile">Mensaje</label>
        <textarea
          required
          id="mensaje_mobile"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
        />
      </div>
      {/* <div>
        <label htmlFor="">Rango de horario:</label>
        <select
          required
          name="rangoHorario"
          onChange={handleChange}
          value={form.rangoHorario}
        >
          {renderOptions()}
        </select>
      </div> */}

      <div className={styles.input_file}>
        <input
          hidden
          type="file"
          id="file_button_mobile"
          onChange={handleFile}
        />
        <label htmlFor="file_button_mobile">Adjuntar archivo</label>
      </div>

      <button disabled={isEmpty() || loading} type="submit">
        AGENDA TU CITA {loading ? <Spinner /> : null}
      </button>
    </form>
  )
}

export default FormMobile
