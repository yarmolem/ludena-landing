import ErrorMsg from '@/components/ErrorMsg'
import Spinner from '@/components/Spinner'
import { CheckIcon } from '@/SVG/icons'
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
  file = {},
  loading,
  isEmpty,
  errors = { ok: true },
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

  const isEmptyFile = !file

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
            id="nombres_desktop"
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
          />
          <ErrorMsg errors={errors} name="nombres" />
        </div>
        <div>
          <label htmlFor="email_desktop">Correo</label>
          <input
            id="email_desktop"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <ErrorMsg errors={errors} name="email" />
        </div>
        <div className={styles.textarea}>
          <label htmlFor="mensaje_desktop">Breve descripción del caso:</label>
          <textarea
            id="mensaje_desktop"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
          />
          <ErrorMsg errors={errors} name="mensaje" />
        </div>
        <div>
          <label htmlFor="celular_desktop">Celular</label>
          <input
            id="celular_desktop"
            type="number"
            name="celular"
            value={form.celular}
            onChange={handleChange}
          />
          <ErrorMsg errors={errors} name="celular" />
        </div>

        {/* <div>
          <label htmlFor="">Rango de horario:</label>
          <select
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
        <label htmlFor="file_button_desktop">
          Adjuntar archivo <span>{!isEmptyFile ? <CheckIcon /> : null}</span>
        </label>
      </div>

      <button disabled={loading} type="submit">
        AGENDA TU CITA {loading ? <Spinner /> : null}
      </button>
    </form>
  )
}

export default FormDesktop
