import { useState } from 'react'
// components
import Sidebar from '@/components/Sidebar'

// utils
import { PlayIcon, WebIcon, WhatsappIcon } from '@/SVG/icons'

// styles
import styles from './hero.module.scss'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <div className={styles.hero}>
      <Sidebar {...{ isOpen, onClose }} />
      {/* LOGO */}
      <div className={styles.hero_logo}>
        <div />
        <img
          width={100}
          height={100}
          src="/logo/logo-text.svg"
          alt="Logo Ludeña abogados"
        />
      </div>

      {/* BARS */}
      <button onClick={onOpen} className={styles.hero_bars}>
        <div />
        <div />
        <div />
      </button>

      {/* Background */}
      <div className={styles.hero_background}>
        <nav className={styles.hero_nav1}>
          <ul>
            <li>
              <span>NOSOTROS</span>
            </li>
            <li>
              <span>MEMBRESÍAS</span>
            </li>
          </ul>
        </nav>

        <img src="/images/hero.png" alt="" className={styles.image_mobile} />
        <img
          alt=""
          src="/images/hero_desktop.png"
          className={styles.image_desktop}
        />
        <div>
          <h1>PROFESIONALES DEFENDIENDO TU VOCACIÓN</h1>
          <h2>
            ADQUIERE TU SEGURO DE ASISTENCIA JURÍDICA A <strong>S/49.90</strong>
          </h2>

          <button>ABOGADOS 24/7</button>
        </div>
      </div>

      {/* Boton de play */}
      <div className={styles.hero_play}>
        <nav className={styles.hero_nav2}>
          <ul>
            <li>
              <span>POR QUÉ ELEGIRNOS</span>
            </li>
            <li>
              <span>PREGUNTAS FRECUENTES</span>
            </li>
            <li>
              <span>AGENDA UNA CITA</span>
            </li>
          </ul>
        </nav>
        <button>
          <PlayIcon />
        </button>
      </div>

      {/* Flotantes */}
      <div className={styles.hero_flotantes}>
        <button>
          <WebIcon />
        </button>
        <button>
          <WhatsappIcon />
        </button>
      </div>
    </div>
  )
}

export default Hero
