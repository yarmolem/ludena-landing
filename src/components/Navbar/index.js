// styles
import { motion } from 'framer-motion'
import NavLink from '../NavLink'
import styles from './navbar.module.scss'

const Navbar = ({ onOpen, inView }) => {
  return (
    <motion.div
      variants={{
        open: {
          opacity: 1,
          pointerEvents: 'unset'
        },
        close: {
          opacity: 0,
          pointerEvents: 'none'
        }
      }}
      animate={!inView ? 'open' : 'close'}
      className={styles.navbar}
    >
      <div className={styles.navbar_container}>
        <NavLink to="hero-section">
          <img src="/logo/logo.svg" alt="Logo Ludeña Abogados" />
        </NavLink>

        {/* BARS */}
        <button onClick={onOpen} className={styles.navbar_bars}>
          <div />
          <div />
          <div />
        </button>
      </div>
    </motion.div>
  )
}

export default Navbar
