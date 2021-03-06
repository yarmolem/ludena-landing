import { useState } from 'react'

// components
import NavLink from '../NavLink'
import Terminos from '../Terminos'
import LinkExterno from '../LinkExterno'

// utils
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from '@/SVG/icons'

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
            <NavLink to="nosotros-section">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="membresias-section">Membresías</NavLink>
          </li>
          <li>
            <NavLink to="elegirnos-section">Por qué elegirnos</NavLink>
          </li>
          <li>
            <NavLink to="consultas-section">Agendar una cita</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.item}>
        <h3>
          TÉRMINOS Y <br /> CONDICIONES
        </h3>

        <ul>
          <li>
            <NavLink offset={-80} to="preguntas-section">
              Preguntas frecuentes
            </NavLink>
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
            <a href="tel:+51969745751">
              <span>969745751</span>
            </a>
          </li>
          <li>
            <LinkExterno href="mailto:aludena@estudioludena.com">
              <span>aludena@estudioludena.com</span>
            </LinkExterno>
          </li>
          <li>
            <span>Avenida Benavides N° 1944, piso 9, Miraflores</span>
          </li>
          <li>
            <LinkExterno href="https://www.estudioludena.com">
              <span>www.estudioludena.com</span>
            </LinkExterno>
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
            <YoutubeIcon />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
