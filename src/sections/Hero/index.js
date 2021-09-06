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

  console.log(isOpen)

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
        <img src="/images/hero.png" alt="" className={styles.image_mobile} />
        <img
          src="/images/hero_desktop.png"
          alt=""
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
