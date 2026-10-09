import { environment as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SplitIntro from '../../common/SplitIntro/SplitIntro'
import EditorialBlock from '../../common/EditorialBlock/EditorialBlock'
import styles from './Environment.module.css'

function Environment() {
  return (
    <Section id={c.id} variant="tightTop">
      <SplitIntro id={c.id} title={c.title} intro={c.intro} topics={c.topics} />

      <EditorialBlock
        title={c.editorial.title}
        aside={
          <dl className={styles.facts}>
            {c.editorial.facts.map((f) => (
              <div key={f.term}>
                <dt className={styles.term}>{f.term}</dt>
                <dd className={styles.description}>{f.description}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <p>{c.editorial.text}</p>
      </EditorialBlock>
    </Section>
  )
}

export default Environment
