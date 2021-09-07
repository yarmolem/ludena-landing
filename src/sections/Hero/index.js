import { useState } from 'react'

// components
import NavLink from '@/components/NavLink'
import Sidebar from '@/components/Sidebar'

// utils
import { PlayIcon, WebIcon, WhatsappIcon } from '@/SVG/icons'

// styles
import styles from './hero.module.scss'

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
            <li>
              <NavLink to="nosotros-section">NOSOTROS</NavLink>
            </li>
            <li>
              <NavLink to="membresias-section">
                <span>MEMBRESÍAS</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <img src="/images/hero.png" alt="" className={styles.image_mobile} />
        <div>
          <h1>PROFESIONALES DEFENDIENDO TU VOCACIÓN</h1>
          <h2>
            ADQUIERE TU SEGURO DE ASISTENCIA JURÍDICA <br /> A{' '}
            <strong>S/49.90</strong>
          </h2>

          <button>ABOGADOS 24/7</button>
        </div>
      </div>

      {/* Boton de play */}
      <div className={styles.hero_play}>
        <nav className={styles.hero_nav2}>
          <ul>
            <li>
              <NavLink to="elegirnos-section">POR QUÉ ELEGIRNOS</NavLink>
            </li>
            <li>
              <NavLink to="preguntas-section">PREGUNTAS FRECUENTES</NavLink>
            </li>
            <li>
              <NavLink to="consultas-section">AGENDA UNA CITA</NavLink>
            </li>
          </ul>
        </nav>
        <button>
          <PlayIcon />
        </button>
      </div>

      {/* Flotantes */}
      <div className={styles.hero_flotantes}>
        <a href="https://ludena.vercel.app" target="_blank" rel="noreferrer">
          <WebIcon />
        </a>
        <a href="#">
          <WhatsappIcon />
        </a>
      </div>
    </div>
  )
}

export default Hero
