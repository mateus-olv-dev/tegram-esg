import { pillars } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import styles from './Pillars.module.css'

function Pillars() {
  return (
    <Section id="pilares">
      <SectionHeading id="pilares" title={pillars.title} />

      <ul className={styles.list}>
        {pillars.items.map((item) => (
          <li key={item.id}>
            <a className={styles.pillar} href={`#${item.id}`}>
              <h3 className={styles.label}>{item.label}</h3>
              <strong className={styles.headline}>{item.headline}</strong>
              <p className={styles.highlight}>{item.highlight}</p>
              <span className={styles.link}>{pillars.linkLabel}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Pillars
