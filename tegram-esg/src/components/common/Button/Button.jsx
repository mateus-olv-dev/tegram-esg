import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({ children, href, className = '', variant = 'primary', type = 'button' }) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if (href) {
    return (
      <Link to={href} className={classes}>
        <span>{children}</span>
      </Link>
    )
  }

  return (
    <button type={type} className={classes}>
      <span>{children}</span>
    </button>
  )
}

export default Button
