import { useState } from 'react'
import { environment as c } from '../../../data/esg'
import Section from '../../common/Section/Section'
import styles from './Environment.module.css'

// Defina com `import` de src/assets/esg quando a fotografia da compostagem estiver disponível.
const compostImage = null

function Environment() {
  const { editorial } = c
  const [activeGroup, setActiveGroup] = useState(c.groups[0].number)

  return (
    <Section id={c.id} variant="tightTop">
      <header className={styles.opening}>
        <div>
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h2 id={`${c.id}-title`} className={styles.title}>{c.title}</h2>
        </div>
        <p className={styles.intro}>{c.intro}</p>
      </header>

      <ol className={styles.groups}>
        {c.groups.map((group) => {
          const isOpen = activeGroup === group.number
          const headerId = `${c.id}-group-${group.number}-header`
          const panelId = `${c.id}-group-${group.number}-panel`

          return (
            <li key={group.number} className={`${styles.group} ${isOpen ? styles.open : ''}`}>
              <h3 className={styles.groupHeading}>
                <button
                  type="button"
                  id={headerId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveGroup(isOpen ? null : group.number)}
                >
                  <span className={styles.number} aria-hidden="true">{group.number}</span>
                  <span className={styles.groupTitle}>{group.title}</span>
                  <span className={styles.indicator} aria-hidden="true" />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={styles.panelWrap}
              >
                <div className={styles.panelInner}>
                  <ul className={styles.items}>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <div className={styles.feature}>
        <figure className={styles.photo}>
          {compostImage ? (
            <img className={styles.image} src={compostImage} alt="" loading="lazy" />
          ) : (
            <figcaption className={styles.placeholder}>{editorial.photoPlaceholder}</figcaption>
          )}
        </figure>

        <div className={styles.panel}>
          <p className={styles.panelEyebrow}>{editorial.eyebrow}</p>
          <h3 className={styles.panelTitle}>{editorial.title}</h3>
          <p className={styles.panelText}>{editorial.text}</p>
          <dl className={styles.facts}>
            {editorial.facts.map((f) => (
              <div key={f.term}>
                <dt className={styles.term}>{f.term}</dt>
                <dd className={styles.description}>{f.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

export default Environment