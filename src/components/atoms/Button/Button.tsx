import styles from './Button.module.css'

type PropsType = {
  value: string | React.ReactNode
  onClick: any
}
const Button = ({ value, onClick }: PropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {value}
    </button>
  )
}

export default Button
