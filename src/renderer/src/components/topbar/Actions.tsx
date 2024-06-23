import { actionsMenu } from '../../constants/actionsMenu'
import ActionItem from './ActionItem'
import styles from './actions.module.styl'

const Actions = () => {
  return (
    <div className={styles['actions-container']}>
      {actionsMenu.map((item) => (
        <ActionItem color={item.color} onClick={item.onClick}>
          {item.icon}
        </ActionItem>
      ))}
    </div>
  )
}

export default Actions
