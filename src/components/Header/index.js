// styles
import styles from './header.module.scss'

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
