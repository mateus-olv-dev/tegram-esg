import iso9001 from '../../../assets/esg/ISO-9001.webp'
import iso14001 from '../../../assets/esg/ISO-14001.webp'
import iso45001 from '../../../assets/esg/ISO-45001-Warpcom_2.webp'
import styles from './Certifications.module.css'

const seals = {
  'iso-9001': iso9001,
  'iso-14001': iso14001,
  'iso-45001': iso45001,
}

function Certifications({ title, text, items }) {
  return (
    <div className={styles.certifications}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>
      </div>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.certification}>
            <div className={styles.seal}>
              <img src={seals[item.id]} alt={item.alt} />
            </div>
            <strong className={styles.label}>{item.label}</strong>
            <span className={styles.description}>{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Certifications
