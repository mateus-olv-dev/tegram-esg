import TopBar from '../TopBar/TopBar'
import Logo from '../Logo/Logo'
import MainNav from '../MainNav/MainNav'
import { navItems } from '../../../data/navigation'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <TopBar />

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Logo to="/" />
          <MainNav items={navItems} />
        </div>
      </div>
    </header>
  )
}

export default Header
