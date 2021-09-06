import { useState } from 'react'
// components
import Header from '@/components/Header'
import Pregunta from '@/components/Pregunta'

// utils
import { preguntas } from '@/data/preguntas'

import styles from './preguntas.module.scss'
import GoBack from '@/components/GoBack'

const Preguntas = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [actualQuestion, setActualQuestion] = useState({
    label: '',
    content: ''
  })

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const handleQuestion = ({ label, content }) => {
    onOpen()
    setActualQuestion({ label, content })
  }

  const PreguntaSide = () => {
    return (
      <div className={styles.container}>
        {preguntas.map((p) => (
          <Pregunta
            key={`pregunta-${p.num}`}
            {...p}
            {...{ handleQuestion: () => handleQuestion(p) }}
          />
        ))}
      </div>
    )
  }

  const RespuestaSide = () => {
    const { label, content } = actualQuestion
    return (
      <div className={styles.respuesta}>
        <div className={styles.respuesta_goback}>
          <GoBack onClick={onClose} />
        </div>
        <div className={styles.respuesta_label}>
          <h2>{label}</h2>
        </div>
        <p className={styles.respuesta_content}>{content}</p>
      </div>
    )
  }

  return (
    <div>
      <Header title="PREGUNTAS FRECUENTES" />
      {isOpen ? RespuestaSide() : PreguntaSide()}
    </div>
  )
}

export default Preguntas
