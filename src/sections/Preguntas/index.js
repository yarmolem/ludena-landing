import { useState } from 'react'
// components
import Header from '@/components/Header'
import Pregunta from '@/components/Pregunta'

// utils
import { preguntas } from '@/data/preguntas'

import styles from './preguntas.module.scss'
import GoBack from '@/components/GoBack'
import { sleep } from 'src/utils/sleep'
import { motion } from 'framer-motion'

const variants = {
  open: {
    x: '0',
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 1.5 }
  },
  close: {
    x: '100%',
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 1.5 }
  }
}

const Preguntas = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isRespuesta, setIsRespuesta] = useState(false)
  const [actualQuestion, setActualQuestion] = useState({
    label: '',
    content: ''
  })

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  const initAnimation = () => setIsRespuesta((v) => !v)

  const handleGoBack = async () => {
    initAnimation()
    await sleep(1500)
    onClose()
    setActualQuestion({
      label: '',
      content: ''
    })
  }

  const handleQuestion = async ({ label, content }) => {
    initAnimation()
    await sleep(1200)
    onOpen()
    setActualQuestion({ label, content })
  }

  const PreguntaSide = () => {
    return (
      <motion.div
        variants={variants}
        animate={isRespuesta ? 'close' : 'open'}
        className={styles.container}
      >
        {preguntas.map((p) => (
          <Pregunta
            key={`pregunta-${p.num}`}
            {...p}
            {...{ handleQuestion: () => handleQuestion(p) }}
          />
        ))}
      </motion.div>
    )
  }

  const RespuestaSide = () => {
    const { label, content } = actualQuestion
    return (
      <motion.div
        variants={variants}
        animate={!isRespuesta ? 'close' : 'open'}
        className={styles.respuesta}
      >
        <div className={styles.respuesta_goback}>
          <GoBack onClick={handleGoBack} />
        </div>
        <div className={styles.respuesta_label}>
          <h2>{label}</h2>
        </div>
        <div className={styles.respuesta_content}>
          <p>{content}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <div id="preguntas-section" className={styles.preguntas}>
      <div className={styles.header_mobile}>
        <Header title="PREGUNTAS FRECUENTES" />
      </div>

      <div className={styles.grid}>
        <div className={styles.header_desktop}>
          <h2>PREGUNTAS FRECUENTES</h2>
        </div>
        {isOpen ? RespuestaSide() : PreguntaSide()}
      </div>
    </div>
  )
}

export default Preguntas
