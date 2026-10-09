import { hero } from '../../../data/esg'
import heroImage from '../../../assets/esg/hero.png'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ '--hero-image': `url(${heroImage})` }}
      aria-labelledby="hero-title"
    >
      <div className={styles.content} data-reveal>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>{hero.title}</h1>
        <p className={styles.headline}>{hero.headline}</p>
        <p className={styles.text}>{hero.text}</p>
        <a className={styles.cta} href={hero.scrollTarget}>
          {hero.ctaLabel}
          <span className={styles.ctaArrow} aria-hidden="true" />
        </a>
      </div>

      <a className={styles.scrollCue} href={hero.scrollTarget} aria-hidden="true" tabIndex={-1}>
        <span className={styles.scrollCueLine} />
        {hero.scrollLabel}
      </a>
    </section>
  )
}

export default Hero
