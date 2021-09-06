// styles
import { useState } from 'react'
import styles from './membresias.module.scss'

const MembresiaItem = ({ src, label, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen((v) => !v)

  const Iconside = () => (
    <div>
      <img src={src} alt="" />
      <span>{label}</span>
    </div>
  )

  return (
    <div onClick={onToggle} className={styles.grid_item}>
      {isOpen ? <p>{content}</p> : Iconside()}
    </div>
  )
}

export default MembresiaItem
