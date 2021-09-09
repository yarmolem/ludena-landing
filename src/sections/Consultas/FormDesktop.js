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

const FormDesktop = ({
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
      className={styles.form_desktop}
    >
      <section className={styles.form_desktop_grid}>
        <div>
          <label htmlFor="nombres_desktop">Nombres y apellidos</label>
          <input
            required
            id="nombres_desktop"
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email_desktop">Correo</label>
          <input
            required
            id="email_desktop"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.textarea}>
          <label htmlFor="mensaje_desktop">Mensaje</label>
          <textarea
            required
            id="mensaje_desktop"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="celular_desktop">Celular</label>
          <input
            required
            id="celular_desktop"
            type="number"
            name="celular"
            value={form.celular}
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
      </section>

      <div className={styles.input_file}>
        <input
          hidden
          type="file"
          id="file_button_desktop"
          onChange={handleFile}
        />
        <label htmlFor="file_button_desktop">Adjuntar archivo</label>
      </div>

      <button disabled={isEmpty() || loading} type="submit">
        AGENDA TU CITA {loading ? <Spinner /> : null}
      </button>
    </form>
  )
}

export default FormDesktop
