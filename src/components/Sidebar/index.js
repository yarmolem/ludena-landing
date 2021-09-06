import Link from 'next/link'

// Terceros
import { motion } from 'framer-motion'

// styles
import styles from './sidebar.module.scss'

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
          <ul>
            <li>
              <Link href="#">
                <a onClick={onClose}>
                  NOSOTROS <span>{'>'}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a onClick={onClose}>
                  MEMBRESÍA <span>{'>'}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a onClick={onClose}>
                  POR QUÉ ELEGIRNOS <span>{'>'}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a onClick={onClose}>
                  PREGUNTAS FRECUENTES <span>{'>'}</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a onClick={onClose}>
                  ¿TIENES MÁS CONSULTAS? <span>{'>'}</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </aside>
  )
}

export default Sidebar
