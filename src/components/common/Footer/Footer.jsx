import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logoSrc from '../../../assets/logo/tegram-logo-orange.png'

const contacts = [
  {
    label: 'Envie uma mensagem',
    value: 'contato@tegram.com.br',
    href: 'mailto:contato@tegram.com.br',
    icon: 'mail',
  },
  {
    label: 'Como Chegar',
    value: 'Av. dos Portugueses, Nº 100 - Itaqui',
    href: 'https://maps.app.goo.gl/dDhUAWwqXxVmfHBt9',
    icon: 'map',
  },
  {
    label: 'Central de atendimento',
    value: '+55 98 3196-0720',
    href: 'tel:+559831960720',
    icon: 'phone',
  },
]

const companyLinks = [
  { label: 'Institucional', href: '#' },
  { label: 'Na mídia', href: '#' },
  { label: 'Fale conosco', href: '#' },
  { label: 'Banco de talentos', href: '#' },
]

const legalLinks = [
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Termo de Uso', href: '#' },
  { label: 'Sustentabilidade', href: '#' },
]

const address =
  'Terminal de Grãos do Maranhão, Porto do Itaqui - Av. dos Portugueses, Nº 100 - Itaqui, São Luís - MA, 65085-582'

const copyright = 'TEGRAM ©2024 Todos os direitos reservados'

function Icon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'mail') {
    return (
      <svg {...common}>
        <path d="M3 9l9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M3 9l9 6 9-6" />
      </svg>
    )
  }

  if (name === 'map') {
    return (
      <svg {...common}>
        <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" />
        <path d="M9 4v14M15 6v14" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandBlock}>
            <Link to="/" className={styles.logoLink} aria-label="TEGRAM home">
              <img className={styles.logo} src={logoSrc} alt="TEGRAM" />
            </Link>

            <p className={styles.address}>{address}</p>

            <a
              className={styles.social}
              href="https://www.linkedin.com/company/tegram/mycompany/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn da TEGRAM"
            >
              <svg width="17" height="17" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contatos</h3>
            <ul className={styles.contactList}>
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a className={styles.contactItem} href={contact.href}>
                    <span className={styles.contactIcon}>
                      <Icon name={contact.icon} />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>{contact.label}</span>
                      <span className={styles.contactValue}>{contact.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Companhia</h3>
            <ul className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a className={styles.link} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.container} ${styles.bottomBar}`}>
          <span className={styles.copyright}>{copyright}</span>
          <nav className={styles.legal} aria-label="Links legais">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer