import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'

// components
import FormMobile from './FormMobile'
import FormDesktop from './FormDesktop'
import Header from '@/components/Header'

// utils
import { CreateConsultas } from '../../graphql/documents'

// styles
import styles from './consultas.module.scss'
import { consultaValidation } from 'src/validation/consulta'

const Consultas = () => {
  // graphql
  const [createConsulta, { loading }] = useMutation(CreateConsultas)

  // states
  const [file, setFile] = useState({})
  const [isDirty, setIsDirty] = useState(false)
  const [errors, setErrors] = useState({ ok: true })
  const [form, setForm] = useState({
    email: '',
    nombres: '',
    mensaje: '',
    celular: ''
    // rangoHorario: '0'
  })

  useEffect(() => {
    if (isDirty) {
      const errorObj = consultaValidation(form)
      setErrors(errorObj)
    }
  }, [isDirty, form])

  const notify = () => {
    toast.success('Tu consulta ha sido enviada')
  }

  const handleChange = ({ target: { value, name } }) => {
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleFile = ({ target: { files, validity } }) => {
    if (validity.valid) setFile(files[0])
  }

  const reset = () => {
    setFile({})
    setForm({
      email: '',
      nombres: '',
      mensaje: '',
      celular: ''
      // rangoHorario: '0'
    })
  }

  const isEmpty = () => {
    const email = form.email.trim() === ''
    const nombres = form.nombres.trim() === ''
    const mensaje = form.mensaje.trim() === ''
    const celular = form.celular.trim() === ''
    // const rangoHorario = form.rangoHorario === '0'

    return email || nombres || mensaje || celular
  }

  const handleSubmit = async () => {
    setIsDirty(true)
    const errorObj = consultaValidation(form)
    if (!errorObj.ok) return setErrors(errorObj)

    const payload = {
      variables: {
        input: { ...form },
        archivo: file
      }
    }

    const res = await createConsulta(payload).catch((err) => {
      console.error('Error al crear consulta', err)
    })

    if (res?.data?.CreateConsultas) {
      reset()
      notify()
      console.log(res)
    }
  }

  const propsForm = {
    file,
    form,
    errors,
    loading,
    isEmpty,
    handleFile,
    handleSubmit,
    handleChange
  }

  return (
    <div id="consultas-section" className={styles.consultas}>
      <Header title="¿TIENES MÁS CONSULTAS?" />

      <div className={styles.container}>
        <p>
          Si deseas mayor información de nuestro servicio o deseas hacernos una
          consulta legal, agenda una reunión virtual con nuestros profesionales.
          Tendrá una duración de 30 minutos y es totalmente gratuita. Nuestro
          horario de atención es de lunes a viernes de 9am a 1pm y 2pm a 7pm.
        </p>

        <p>
          En caso desees comentarnos un caso particular y, a fin de brindarte
          las mejores alternativas de solución, te invitamos a adjuntar los
          documentos sustentatorios en la opción “Adjuntar archivo” y así
          analizarlos con anticipación. Mantendremos en estricta reserva la
          información que nos brindes.
        </p>
      </div>

      <FormMobile {...propsForm} />
      <FormDesktop {...propsForm} />
    </div>
  )
}

export default Consultas
