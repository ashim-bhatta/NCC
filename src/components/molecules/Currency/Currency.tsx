import { ChangeEvent } from 'react'
import styles from './Currency.module.css'

interface IProps {
  title: string
  currency: string
  value?: number
  name?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isDifferent?: boolean
}

const Currency = ({
  title,
  currency,
  value = 0,
  isDifferent = false,
  onChange = () => {},
  name = '',
}: IProps) => {
  return (
    <div
      className={`${styles.currency} ${isDifferent && styles.changeColor}  `}
    >
      <div className={styles.textInputContainer}>
        <h2 className={styles.textInputContainer__title}>{title}</h2>
        <input
          type='number'
          className={styles.textInputContainer__input}
          value={value ? value : ''}
          onChange={onChange}
          name={name}
        />
      </div>

      <div className={styles.selectContainer}>
        <h3 className='selectedCurrency'>{currency}</h3>
      </div>
    </div>
  )
}

export default Currency
