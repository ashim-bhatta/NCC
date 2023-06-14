import style from './ConverterCard.module.css'
import Currency from '../../molecules/Currency/Currency'
import { TbArrowsLeftRight } from 'react-icons/tb'
import { useState, ChangeEvent } from 'react'
import { GLOBAL_CONSTANT } from '../../../static/GlobalConstant/GlobalConstant'

const ConverterCard = () => {
  const [values, setValues] = useState({
    nep: 0,
    busd: 0,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim()
    const name = e.target.name
    const regex = /^-?\d*\.?\d*$/

    if (!regex.test(inputValue) || inputValue.length > 10) {
      return
    }

    //changing the currency
    let busd = 0
    let nep = 0

    if (name === 'nep') {
      busd = +(+inputValue * GLOBAL_CONSTANT.ONE_BUSD_TO_NEP).toFixed(2)
      nep = +inputValue
    } else {
      nep = +(+inputValue / GLOBAL_CONSTANT.ONE_BUSD_TO_NEP).toFixed(2)
      busd = +inputValue
    }
    setValues({
      nep,
      busd,
    })
  }

  return (
    <div className={style.conveeterCard}>
      <Currency
        title='you have'
        currency={'nep'}
        value={values.nep}
        name='nep'
        onChange={handleChange}
      />
      <Currency
        title='you get'
        currency={'busd'}
        value={values.busd}
        onChange={handleChange}
        name='busd'
        isDifferent
      />
      <div className={style.arrowIcons}>
        <TbArrowsLeftRight />
      </div>
    </div>
  )
}

export default ConverterCard
