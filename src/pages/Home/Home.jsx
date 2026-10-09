import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import Button from '../../components/common/Button/Button'
import styles from './Home.module.css'
import heroImage from '../../assets/hero/tegram-hero.png'
import { homeHero, homeAbout, homeNews } from '../../data/home'

function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <section
          className={styles.hero}
          style={{ '--hero-image': `url(${heroImage})` }}
        >
          <div className={styles.container}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span className={styles.highlight}>{homeHero.titleHighlight}</span>
                <span className={styles.line}>{homeHero.titleRest}</span>
              </h1>

              <p className={styles.subtitle}>{homeHero.subtitle}</p>

              <Button
                href={homeHero.ctaLink}
                variant="primary"
                className={styles.cta}
              >
                {homeHero.cta}
              </Button>
            </div>
          </div>
        </section>

        <section className={styles.about}>
      '<div className={styles.aboutContainer}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutMain}>
            <div className={styles.aboutImages}>
              {homeAbout.images.ship.src ? (
                <img
                  className={styles.imgShip}
                  src={homeAbout.images.ship.src}
                  alt={homeAbout.images.ship.alt}
                />
              ) : (
                <div className={`${styles.imgShip} ${styles.placeholder}`} aria-hidden="true" />
              )}

              {homeAbout.images.grain.src ? (
                <img
                  className={styles.imgGrain}
                  src={homeAbout.images.grain.src}
                  alt={homeAbout.images.grain.alt}
                />
              ) : (
                <div className={`${styles.imgGrain} ${styles.placeholder}`} aria-hidden="true" />
              )}
            </div>

            <div className={styles.aboutText}>
              <span className={styles.aboutKicker}>{homeAbout.kicker}</span>
              <h2 className={styles.aboutTitle}>{homeAbout.title}</h2>
              <p className={styles.aboutParagraph}>{homeAbout.text}</p>
            </div>
          </div>

          <aside className={styles.newsCard}>
            <span className={styles.newsKicker}>{homeNews.kicker}</span>
            <h2 className={styles.newsHeading}>{homeNews.title}</h2>

            <div className={styles.newsList}>
              {homeNews.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${styles.newsItem} ${item.hasThumb ? '' : styles.noThumb}`}
                >
                  {item.hasThumb &&
                    (item.image ? (
                      <img className={styles.newsThumb} src={item.image} alt="" />
                    ) : (
                      <div className={`${styles.newsThumb} ${styles.placeholder}`} aria-hidden="true" />
                    ))}

                  <div className={styles.newsBody}>
                    <div className={styles.newsMeta}>
                      <span className={styles.newsTag}>{item.tag}</span>
                      <span className={styles.newsDot} aria-hidden="true" />
                      <span className={styles.newsTime}>{item.time}</span>
                    </div>
                    <h3 className={styles.newsTitle}>{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home