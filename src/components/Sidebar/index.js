import Link from 'next/link'

// Terceros
import { motion } from 'framer-motion'

// styles
import styles from './sidebar.module.scss'
import NavLink from '../NavLink'

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut' }
  },
  closed: {
    opacity: 0,
    x: '100%',
    transition: { ease: 'easeOut' }
  }
}

const fade = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={styles.sidebar}
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <motion.div
        variants={fade}
        onClick={onClose}
        initial={{ opacity: 0 }}
        className={styles.sidebar_overlay}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        variants={variants}
        className={styles.sidebar_content}
        initial={{ opacity: 0, x: '-100%' }}
        animate={isOpen ? 'open' : 'closed'}
      >
        <nav className={styles.navegation}>
          {/* <img width={200} height={200} src="/logo/logo.svg" alt="" /> */}

          <ul>
            <li>
              <NavLink offset={0} onClick={onClose} to="nosotros-section">
                NOSOTROS <span>{'>'}</span>
              </NavLink>
            </li>
            <li>
              <NavLink offset={-80} onClick={onClose} to="membresias-section">
                MEMBRESÍA <span>{'>'}</span>
              </NavLink>
            </li>
            <li>
              <NavLink offset={-80} onClick={onClose} to="elegirnos-section">
                POR QUÉ ELEGIRNOS <span>{'>'}</span>
              </NavLink>
            </li>
            <li>
              <NavLink offset={-80} onClick={onClose} to="preguntas-section">
                PREGUNTAS FRECUENTES <span>{'>'}</span>
              </NavLink>
            </li>
            <li>
              <NavLink offset={-80} onClick={onClose} to="consultas-section">
                ¿TIENES MÁS CONSULTAS? <span>{'>'}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </motion.div>
    </aside>
  )
}

export default Sidebar
