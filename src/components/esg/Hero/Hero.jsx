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
        <h1 id="hero-title" className={styles.title}>{hero.title}</h1>
        <p className={styles.headline}>{hero.headline}</p>
        <p className={styles.text}>{hero.text}</p>
      </div>

      <a className={styles.scrollCue} href={hero.scrollTarget}>
        <span className={styles.scrollCueLine} aria-hidden="true" />
        {hero.scrollLabel}
      </a>
    </section>
  )
}

export default Hero
