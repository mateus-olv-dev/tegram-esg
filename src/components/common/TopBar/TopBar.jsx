import styles from './TopBar.module.css'
import { utilityItems, languageItems } from '../../../data/navigation'

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <path d="M10 19v-3.96 3.15" />
      <path d="M7 19h5" />
      <rect width="6" height="10" x="16" y="12" rx="2" />
    </svg>
  )
}

const icons = {
  users: UsersIcon,
  monitor: MonitorIcon,
}

function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.contactGroup}>
          <span className={styles.contactItem}>
            <MailIcon />
            contato@tegram.com.br
          </span>

          <span className={styles.divider} aria-hidden="true" />

          <span className={styles.contactItem}>
            <MapIcon />
            Av. dos Portugueses, Nº 100 - Itaqui, São Luís - MA (BRA)
          </span>
        </div>

        <div className={styles.rightGroup}>
          <nav className={styles.utilityNav} aria-label="Links rápidos">
            {utilityItems.map((item, index) => {
              const Icon = icons[item.icon]

              return (
                <div key={item.label} className={styles.utilityEntry}>
                  {index > 0 && <span className={styles.divider} aria-hidden="true" />}
                  <a href={item.href} className={styles.utilityLink}>
                    {item.label}
                    {Icon && <Icon />}
                  </a>
                </div>
              )
            })}
          </nav>

          <div className={styles.languages} role="group" aria-label="Idioma">
            {languageItems.map((lang) => (
              <button
                key={lang.code}
                type="button"
                className={styles.flagButton}
                aria-label={lang.label}
                title={lang.label}
              >
                <img
                  src={`https://flagcdn.com/w40/${lang.flag}.png`}
                  alt=""
                  width="22"
                  height="16"
                  className={styles.flag}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar