import styles from './Highlight.module.css'

/* variant: 'primary' (azul) | 'plain'. bigSize: 'small' para textos longos como "FAPEMA". */
function Highlight({ variant = 'plain', big, bigSize, title, text, source }) {
  const bigClass = bigSize === 'small' ? `${styles.big} ${styles.bigSmall}` : styles.big

  return (
    <article className={variant === 'primary' ? `${styles.highlight} ${styles.primary}` : styles.highlight}>
      <span className={bigClass}>{big}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      {source && <p className={styles.source}>{source}</p>}
    </article>
  )
}

export default Highlight
