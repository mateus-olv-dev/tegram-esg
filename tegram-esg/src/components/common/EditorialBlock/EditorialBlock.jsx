import styles from './EditorialBlock.module.css'

/* tone: 'dark' (fundo verde) | 'light' (filete verde à esquerda). `aside` é opcional. */
function EditorialBlock({ title, tone = 'dark', aside, children }) {
  return (
    <article className={`${styles.editorial} ${styles[tone]}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
      {aside && <div className={styles.aside}>{aside}</div>}
    </article>
  )
}

export default EditorialBlock
