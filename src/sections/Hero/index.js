import { motion } from 'framer-motion'
// components
import NavLink from '@/components/NavLink'
import LinkExterno from '@/components/LinkExterno'

// utils
import { PlayIcon, WebIcon, WhatsappIcon } from '@/SVG/icons'

// styles
import styles from './hero.module.scss'

const linkVariants = {
  hover: {
    x: ['0%', '5%', '-5%', '0%']
  }
}

const Hero = ({ onOpen }) => {
  return (
    <div id="hero-section" className={styles.hero}>
      {/* LOGO */}
      <div className={styles.hero_logo}>
        <div />
        <img src="/logo/logo-text.svg" alt="Logo Ludeña abogados" />
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
            <motion.li variants={linkVariants} whileHover="hover">
              <NavLink to="nosotros-section">NOSOTROS</NavLink>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <NavLink to="membresias-section">MEMBRESÍAS</NavLink>
            </motion.li>
          </ul>
        </nav>

        <img src="/images/hero.png" alt="" className={styles.image_mobile} />
        <div>
          <h1>PROFESIONALES DEFENDIENDO TU VOCACIÓN</h1>
          <h2>
            ADQUIERE TU SEGURO DE ASISTENCIA JURÍDICA <br /> A{' '}
            <strong>S/49.90</strong>
          </h2>

          <LinkExterno>
            <motion.button variants={linkVariants} whileHover="hover">
              ABOGADOS 24/7
            </motion.button>
          </LinkExterno>
        </div>
      </div>

      {/* Boton de play */}
      <div className={styles.hero_play}>
        <nav className={styles.hero_nav2}>
          <ul>
            <motion.li variants={linkVariants} whileHover="hover">
              <NavLink to="elegirnos-section">POR QUÉ ELEGIRNOS</NavLink>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <NavLink to="preguntas-section">PREGUNTAS FRECUENTES</NavLink>
            </motion.li>
            <motion.li variants={linkVariants} whileHover="hover">
              <NavLink to="consultas-section">AGENDA UNA CITA</NavLink>
            </motion.li>
          </ul>
        </nav>
        <button>
          <PlayIcon />
        </button>
      </div>

      {/* Flotantes */}
      <div className={styles.hero_flotantes}>
        <LinkExterno href="https://ludena.vercel.app">
          <WebIcon />
        </LinkExterno>
        <LinkExterno>
          <WhatsappIcon />
        </LinkExterno>
      </div>
    </div>
  )
}

export default Hero
