// utils
import { FacebookIcon, LinkedinIcon, WspIcon } from '@/SVG/icons'
import { useState } from 'react'
import Terminos from '../Terminos'

// styles
import styles from './footer.module.scss'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <footer className={styles.footer}>
      <Terminos {...{ isOpen, onClose }} />

      <div className={styles.item}>
        <h3>CONÓCENOS</h3>

        <ul>
          <li>
            <span>Nosotros</span>
          </li>
          <li>
            <span>Membresía</span>
          </li>
          <li>
            <span>Por qué elegirnos</span>
          </li>
          <li>
            <span>Agendar una cita</span>
          </li>
        </ul>
      </div>

      <div className={styles.item}>
        <h3>TÉRMINOS Y CONDICIONES</h3>

        <ul>
          <li>
            <span>Preguntas frecuentes</span>
          </li>
          <li>
            <button className={styles.terminos} onClick={onOpen}>
              Políticas de privacidad
            </button>
          </li>
          <li>
            <span>Términos y condiciones</span>
          </li>
        </ul>
      </div>

      <div className={styles.item}>
        <h3>CONTÁCTANOS</h3>

        <ul>
          <li>
            <span>(Teléfono)</span>
          </li>
          <li>
            <span>(Mail)</span>
          </li>
          <li>
            <span>(Dirección)</span>
          </li>
          <li>
            <span>(Web)</span>
          </li>
        </ul>
      </div>

      <div className={styles.social}>
        <h3>SÍGUENOS</h3>

        <div className={styles.social_item}>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <LinkedinIcon />
          </span>
          <span>
            <WspIcon />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
