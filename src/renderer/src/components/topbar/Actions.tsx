import { actionsMenu } from '../../constants/actionsMenu'
import styles from './actions.module.styl'
const Actions = () => {
  return (
    <div className={styles['actions-container']}>
      {actionsMenu.map((item) => (
        <div className="action-item" onClick={() => item.click()}>
          {item.icon}
        </div>
      ))}
    </div>
  )
}

export default Actions
