import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import Hero from '../../components/esg/Hero/Hero'
import Pillars from '../../components/esg/Pillars/Pillars'
import Environment from '../../components/esg/Environment/Environment'
import People from '../../components/esg/People/People'
import Governance from '../../components/esg/Governance/Governance'
import Indicators from '../../components/esg/Indicators/Indicators'
import Transparency from '../../components/esg/Transparency/Transparency'
import Commitments from '../../components/esg/Commitments/Commitments'
import styles from './ESG.module.css'

gsap.registerPlugin(ScrollTrigger)

function ESG() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const context = gsap.context(() => {
      // Na Hero só o texto anima; a imagem de fundo permanece fixa.
      gsap.utils.toArray('[data-reveal]').forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 90, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 80%',
              toggleActions: 'restart none restart none',
            },
          },
        )
      })
    }, mainRef)

    return () => context.revert()
  }, [])

  return (
    <div className={styles.page}>
      <Header />

      <main ref={mainRef} className={styles.main}>
        <Hero />
        <Pillars />
        <Environment />
        <People />
        <Governance />
        <Indicators />
        <Transparency />
        <Commitments />
      </main>

      <Footer />
    </div>
  )
}

export default ESG
