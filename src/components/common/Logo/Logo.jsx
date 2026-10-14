import { Link } from 'react-router-dom'
import lightLogo from '../../../assets/logo/tegram-logo.png'
import darkLogo from '../../../assets/logo/tegram-logo-dark.png'
import styles from './Logo.module.css'

function Logo({ to = '/', variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <Link to={to} className={styles.logo} aria-label="TEGRAM home">
      <img
        src={isDark ? darkLogo : lightLogo}
        alt="TEGRAM"
        className={`${styles.image} ${isDark ? '' : styles.light}`}
      />
    </Link>
  )
}

export default Logo
