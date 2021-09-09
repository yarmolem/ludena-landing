import { useEffect } from 'react'
import { motion } from 'framer-motion'

// styles
import styles from './modal.module.scss'

const scale = {
  open: {
    scale: 1,
    opacity: 1
  },
  closed: {
    scale: 0,
    opacity: 0
  }
}

const fade = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

const Modal = ({ isOpen = false, onClose = () => {}, children }) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden'
    } else {
      window.document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div
      className={styles.modal}
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <motion.div
        variants={fade}
        onClick={onClose}
        initial={{ opacity: 0 }}
        className={styles.modal_overlay}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.div
        variants={scale}
        initial={{ scale: 0 }}
        className={styles.modal_content}
        animate={isOpen ? 'open' : 'closed'}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Modal
