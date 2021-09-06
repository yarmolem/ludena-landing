import styles from './pregunta.module.scss'

const Pregunta = ({ num, label, handleQuestion }) => {
  return (
    <div onClick={handleQuestion} className={styles.pregunta}>
      <span>{num}.</span>
      <p>
        {label}
        <span>{'▼'}</span>
      </p>
    </div>
  )
}

export default Pregunta
