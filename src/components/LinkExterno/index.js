import { linkwsp } from '@/data/linkwsp'

import styles from './link.module.scss'

const LinkExterno = ({ href = linkwsp, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={styles.link}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export default LinkExterno
