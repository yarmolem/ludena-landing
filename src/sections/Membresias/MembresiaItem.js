// styles
import styles from './membresias.module.scss'

const MembresiaItem = ({ src, label, content }) => {
  return (
    <div className={styles.grid_card}>
      <div className={styles.grid_card_inner}>
        <div className={styles.grid_card_back}>
          <p>{content}</p>
        </div>
        <div className={styles.grid_card_front}>
          <img src={src} alt="" />
          <span>{label}</span>
        </div>
      </div>
    </div>
  )
}

export default MembresiaItem
