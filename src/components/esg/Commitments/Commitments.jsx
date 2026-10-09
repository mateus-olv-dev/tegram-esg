import { commitments as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import styles from './Commitments.module.css'

function Commitments() {
  return (
    <Section id="compromissos" variant="bordered">
      <SectionHeading id="compromissos" title={c.title} />

      <ol className={styles.list}>
        {c.items.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ol>
    </Section>
  )
}

export default Commitments
