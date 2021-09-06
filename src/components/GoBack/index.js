import { ArrowLeftIcon } from '@/SVG/icons'
import React from 'react'

import styles from './goback.module.scss'

const GoBack = ({ onClick = () => {} }) => {
  return (
    <a onClick={onClick} className={styles.goback}>
      <span>
        <ArrowLeftIcon />
      </span>
      VOLVER
    </a>
  )
}

export default GoBack
