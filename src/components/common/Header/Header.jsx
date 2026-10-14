import { useEffect, useRef, useState } from 'react'
import TopBar from '../TopBar/TopBar'
import Logo from '../Logo/Logo'
import MainNav from '../MainNav/MainNav'
import { navItems } from '../../../data/navigation'
import styles from './Header.module.css'

const SCROLL_THRESHOLD = 125
const MOBILE_QUERY = '(max-width: 930px)'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const mainRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const mobile = window.matchMedia(MOBILE_QUERY)
    const close = () => setMenuOpen(false)

    mobile.addEventListener('change', close)
    return () => mobile.removeEventListener('change', close)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (!mainRef.current?.contains(event.target)) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <TopBar />

      <div
        ref={mainRef}
        className={`${styles.mainHeader} ${scrolled ? styles.scrolled : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.brand}>
            <Logo to="/" variant={scrolled ? 'dark' : 'light'} />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <MainNav
            id="primary-nav"
            items={navItems}
            open={menuOpen}
            onNavigate={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
