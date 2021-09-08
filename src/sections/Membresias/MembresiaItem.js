// styles
import { motion } from 'framer-motion'
import { useState } from 'react'
import { sleep } from 'src/utils/sleep'
import styles from './membresias.module.scss'

const MembresiaItem = ({ src, label, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isContent, setIsContent] = useState(false)

  const onToggle = () => setIsOpen((v) => !v)
  const initAnimation = () => setIsContent((v) => !v)

  const handleFlip = async () => {
    initAnimation()
    await sleep(700)
    onToggle()
  }

  const handleHover = () => {
    initAnimation()
  }

  const Iconside = () => (
    <div className={styles.grid_front}>
      <img src={src} alt="" />
      <span>{label}</span>
    </div>
  )

  const ContentSide = () => (
    <div className={`${styles.grid_back} ${isOpen ? styles.grid_content : ''}`}>
      <p>{content}</p>
    </div>
  )

  return (
    <motion.div
      variants={{
        open: {
          rotateY: 180,
          transition: { ease: 'easeInOut', duration: 1.5 }
        },
        close: {
          rotateY: 0,
          transition: { ease: 'easeInOut', duration: 1.5 }
        }
      }}
      animate={isContent ? 'open' : 'close'}
      onClick={handleFlip}
      onMouseEnter={handleHover}
      // onMouseLeave={handleFlip}
    >
      {isOpen ? ContentSide() : Iconside()}
    </motion.div>
  )
}

export default MembresiaItem
