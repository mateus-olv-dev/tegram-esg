import { Link } from 'react-router-dom'
import styles from './MainNav.module.css'

function MainNav({ items }) {
  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      <ul className={styles.list}>
        {items.map((item) => {
          const content = (
            <span className={styles.linkText}>{item.label}</span>
          )

          if (item.functional) {
            return (
              <li key={item.label} className={styles.item}>
                <Link to={item.href} className={styles.link}>
                  {content}
                </Link>
              </li>
            )
          }

          return (
            <li key={item.label} className={styles.item}>
              <a href={item.href} className={styles.link}>
                {content}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
