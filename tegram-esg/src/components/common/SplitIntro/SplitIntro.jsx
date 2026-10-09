import SectionHeading from '../SectionHeading/SectionHeading'
import TopicList from '../TopicList/TopicList'
import styles from './SplitIntro.module.css'

/* Título + texto à esquerda e tópicos à direita. Com layout="stacked", os tópicos viram cartões abaixo do título. */
function SplitIntro({ id, title, intro, topics, layout = 'split' }) {
  if (layout === 'stacked') {
    return (
      <div>
        <SectionHeading id={id} title={title} intro={intro} />
        <TopicList items={topics} variant="cards" />
      </div>
    )
  }

  return (
    <div className={styles.split}>
      <div>
        <SectionHeading id={id} title={title} intro={intro} />
      </div>
      <TopicList items={topics} />
    </div>
  )
}

export default SplitIntro
