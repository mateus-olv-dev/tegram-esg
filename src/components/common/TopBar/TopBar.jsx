import styles from './TopBar.module.css'
import { utilityItems } from '../../../data/navigation'

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.contactGroup}>
          <span className={styles.contactItem}>contato@tegram.com.br</span>
          <span className={styles.contactItem}>Av. dos Portugueses, Nº 100 - Itaqui, São Luís - MA (BRA)</span>
        </div>

        <nav className={styles.utilityNav} aria-label="Links rápidos">
          {utilityItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.utilityLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default TopBar
