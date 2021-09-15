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

const FormMobile = ({
  file,
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

  console.log(isEmptyFile)

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
          id="nombres_mobile"
          type="text"
          name="nombres"
          value={form.nombres}
          onChange={handleChange}
        />
        <ErrorMsg errors={errors} name="nombres" />
      </div>
      <div>
        <label htmlFor="email_mobile">Correo</label>
        <input
          id="email_mobile"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <ErrorMsg errors={errors} name="email" />
      </div>
      <div>
        <label htmlFor="celular_mobile">Celular</label>
        <input
          id="celular_mobile"
          type="number"
          name="celular"
          value={form.celular}
          onChange={handleChange}
        />
        <ErrorMsg errors={errors} name="celular" />
      </div>
      <div>
        <label htmlFor="mensaje_mobile">Mensaje</label>
        <textarea
          id="mensaje_mobile"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
        />
        <ErrorMsg errors={errors} name="mensaje" />
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

      <div className={styles.input_file}>
        <input
          hidden
          type="file"
          onChange={handleFile}
          id="file_button_mobile"
        />
        <label htmlFor="file_button_mobile">
          Adjuntar archivo <span>{!isEmptyFile ? <CheckIcon /> : null}</span>
        </label>
      </div>

      <button disabled={loading} type="submit">
        AGENDA TU CITA {loading ? <Spinner /> : null}
      </button>
    </form>
  )
}

export default FormMobile
