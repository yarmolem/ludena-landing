// utils
import { PlayIcon, WebIcon, WhatsappIcon } from '@/SVG/icons'

// styles
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
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
      <div className={styles.hero_bars}>
        <div />
        <div />
        <div />
      </div>

      {/* Background */}
      <div className={styles.hero_background}>
        <img src="/images/hero.png" alt="" />
        <div>
          <h1>PROFESIONALES DEFENDIENDO TU PROFESIÓN</h1>
          <h2>ADQUIERE TU SEGURO DE ASISTENCIA JURÍDICA A S/49.90</h2>

          <button>CÓMO FUNCIONA</button>
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
