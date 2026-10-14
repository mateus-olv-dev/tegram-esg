import { NavLink } from 'react-router-dom'
import styles from './MainNav.module.css'

function MainNav({ items, id, open = false, onNavigate }) {
  return (
    <nav
      id={id}
      className={`${styles.nav} ${open ? styles.open : ''}`}
      aria-label="Navegação principal"
    >
      <ul className={styles.list}>
        {items.map((item) => {
          const content = (
            <span className={styles.linkText}>{item.label}</span>
          )

          if (item.functional) {
            return (
              <li key={item.label} className={styles.item}>
                <NavLink
                  to={item.href}
                  end
                  className={styles.link}
                  onClick={onNavigate}
                >
                  {content}
                </NavLink>
              </li>
            )
          }

          return (
            <li key={item.label} className={styles.item}>
              <a href={item.href} className={styles.link} onClick={onNavigate}>
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
