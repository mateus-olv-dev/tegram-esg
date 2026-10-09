import styles from './Section.module.css'

/* O título (h2) da seção deve ter id `${id}-title`. `variant`: 'bordered' | 'tightTop'. */
function Section({ id, variant, children }) {
  const className = [styles.section, variant && styles[variant]].filter(Boolean).join(' ')

  return (
    <section id={id} className={className} aria-labelledby={`${id}-title`} data-reveal>
      <div className={styles.container}>{children}</div>
    </section>
  )
}

export default Section
