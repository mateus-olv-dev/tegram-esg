import { people as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SplitIntro from '../../common/SplitIntro/SplitIntro'
import Highlight from '../../common/Highlight/Highlight'
import styles from './People.module.css'

function People() {
  return (
    <Section id={c.id}>
      <SplitIntro id={c.id} title={c.title} intro={c.intro} topics={c.topics} />

      <div className={styles.highlights}>
        {c.highlights.map(({ id, ...props }) => (
          <Highlight key={id} {...props} />
        ))}
      </div>
    </Section>
  )
}

export default People
