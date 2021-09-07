// styles
import styles from './header.module.scss'

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
  )
}

export default Header
