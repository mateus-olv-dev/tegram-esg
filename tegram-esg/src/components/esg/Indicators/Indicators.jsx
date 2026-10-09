import { indicators as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import styles from './Indicators.module.css'

function Indicators() {
  return (
    <Section id="indicadores" variant="bordered">
      <SectionHeading id="indicadores" title={c.title} intro={c.intro} />

      <ul className={styles.grid}>
        {c.items.map((item) => (
          <li key={item.label} className={styles.indicator}>
            {item.value && <span className={styles.value}>{item.value}</span>}
            <span className={styles.label}>{item.label}</span>
            {item.detail && <span className={styles.detail}>{item.detail}</span>}
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Indicators
