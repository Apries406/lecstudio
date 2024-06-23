import Actions from './Actions'
import styles from './index.module.styl'
const TopBar = () => {
  return (
    <div className={styles['top-bar']}>
      <Actions />
    </div>
  )
}

export default TopBar
