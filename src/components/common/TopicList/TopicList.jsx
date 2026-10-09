import TopicIcon from './TopicIcon'
import styles from './TopicList.module.css'

/* Cada item pode ser uma string ou { label, icon }. O ícone só é exibido na variante "cards". */
function TopicList({ items, variant }) {
  const className = variant ? `${styles.topics} ${styles[variant]}` : styles.topics

  return (
    <ul className={className}>
      {items.map((item) => {
        const { label, icon } = typeof item === 'string' ? { label: item } : item

        return (
          <li key={label} className={styles.item}>
            {variant === 'cards' && icon && <TopicIcon name={icon} className={styles.icon} />}
            {label}
          </li>
        )
      })}
    </ul>
  )
}

export default TopicList
