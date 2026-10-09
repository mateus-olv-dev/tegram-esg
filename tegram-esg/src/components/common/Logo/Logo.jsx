import { Link } from 'react-router-dom'
import logoImage from '../../../assets/logo/tegram-logo.png'
import styles from './Logo.module.css'

function Logo({ to = '/' }) {
  return (
    <Link to={to} className={styles.logo} aria-label="TEGRAM home">
      <img src={logoImage} alt="TEGRAM" className={styles.image} />
    </Link>
  )
}

export default Logo
