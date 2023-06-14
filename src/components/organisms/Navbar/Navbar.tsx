import { useRecoilState } from 'recoil'
import InfoButton from '../../atoms/Button/Button'
import Logo from '../../atoms/Logo/Logo'
import styles from './Navbar.module.css'
import modalState from '../../../recoil/Modal.recoil'

const Navbar = () => {
  const [isOpen, setIsopen] = useRecoilState(modalState)

  const handleModelClose = () => {
    setIsopen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <Logo />
      <InfoButton onClick={handleModelClose} value='Check Info' />
    </nav>
  )
}

export default Navbar
