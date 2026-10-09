import { transparency as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import styles from './Transparency.module.css'

function Transparency() {
  return (
    <Section id={c.id}>
      <SectionHeading id={c.id} title={c.title} intro={c.intro} />

      <ul className={styles.documents}>
        {c.documents.map((doc) => (
          <li key={doc.label}>
            <a className={styles.document} href={doc.href}>
              <span>
                {doc.label}
                {doc.note && <span className={styles.note}>{doc.note}</span>}
              </span>
              <span className={styles.cta}>{c.linkLabel}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Transparency
