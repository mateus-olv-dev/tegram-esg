import { pillars } from '../../../data/esg'
import Section from '../../common/Section/Section'
import SectionHeading from '../../common/SectionHeading/SectionHeading'
import ambienteImage from '../../../assets/esg/pilares/pilar-meio-ambiente.png'
import pessoasImage from '../../../assets/esg/pilares/pilar-pessoas.png'
import governancaImage from '../../../assets/esg/pilares/pillar-governanca.png'
import styles from './Pillars.module.css'

const images = { ambiente: ambienteImage, pessoas: pessoasImage, governanca: governancaImage }

function Pillars() {
  return (
    <Section id="pilares">
      <p className={styles.eyebrow}>{pillars.eyebrow}</p>
      <SectionHeading id="pilares" title={pillars.title} intro={pillars.intro} />

      <ul className={styles.list}>
        {pillars.items.map((item) => (
          <li key={item.id}>
            <a className={styles.pillar} href={`#${item.id}`}>
              <img
                className={styles.image}
                src={images[item.id]}
                alt={item.imageAlt}
                style={{ objectPosition: item.imagePosition }}
                loading="lazy"
              />
              <h3 className={styles.label}>{item.label}</h3>
              <strong className={styles.headline}>{item.headline}</strong>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.highlight}>{item.highlight}</p>
              <span className={styles.link}>{item.cta}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Pillars