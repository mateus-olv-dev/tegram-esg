import styles from './SectionHeading.module.css'

function SectionHeading({ id, title, intro }) {
  return (
    <>
      <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
      {intro && <p className={styles.lead}>{intro}</p>}
    </>
  )
}

export default SectionHeading
