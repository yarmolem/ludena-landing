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

  const Iconside = () => (
    <div className={styles.grid_item}>
      <img src={src} alt="" />
      <span>{label}</span>
    </div>
  )

  const ContentSide = () => (
    <div className={`${styles.grid_item} ${isOpen ? styles.grid_content : ''}`}>
      <p>{content}</p>
    </div>
  )

  return (
    <div>
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
      >
        {isOpen ? ContentSide() : Iconside()}
      </motion.div>
      <button className={styles.btn_flip} onClick={handleFlip}>
        Ver mas
      </button>
    </div>
  )
}

export default MembresiaItem
