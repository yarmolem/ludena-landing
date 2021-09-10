import { ErrorIcon } from '@/SVG/icons'
import styles from './error.module.scss'

const ErrorMsg = ({ errors, name }) => {
  const renderError = () => {
    return (
      <small className={styles.error}>
        <ErrorIcon />
        {errors[name].msg}
      </small>
    )
  }

  return errors[name] ? renderError() : null
}

export default ErrorMsg
