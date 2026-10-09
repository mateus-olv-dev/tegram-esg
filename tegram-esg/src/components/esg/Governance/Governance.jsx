import { governance as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SplitIntro from '../../common/SplitIntro/SplitIntro'
import EditorialBlock from '../../common/EditorialBlock/EditorialBlock'
import Certifications from '../Certifications/Certifications'
import awardsImage from '../../../assets/esg/premios-esg.jpg'
import sealImage from '../../../assets/esg/selo-ghg-prata-2025.jpg'
import styles from './Governance.module.css'

function Governance() {
  const r = c.recognition

  return (
    <Section id={c.id}>
      <SplitIntro id={c.id} title={c.title} intro={c.intro} topics={c.topics} layout="stacked" />

      <EditorialBlock tone="light" title={c.safety.title}>
        <p>{c.safety.text}</p>
      </EditorialBlock>

      <Certifications {...c.certifications} />

      <div className={styles.recognition}>
        <div>
          <h3 className={styles.title}>{r.title}</h3>
          <p>{r.text}</p>

          <div className={styles.seal}>
            <img src={sealImage} alt={r.sealAlt} />
            <div>
              <h4 className={styles.sealTitle}>{r.sealTitle}</h4>
              <p>
                {r.sealText.before}
                <em>{r.sealText.emphasis}</em>
                {r.sealText.after}
              </p>
            </div>
          </div>
        </div>

        <figure className={styles.poster}>
          <img src={awardsImage} alt={r.awardsAlt} />
        </figure>
      </div>
    </Section>
  )
}

export default Governance
