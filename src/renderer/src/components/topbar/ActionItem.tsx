import { ReactElement } from 'react'
import styles from './actionitem.module.styl'

interface TActionItem {
  color: string | undefined
  onClick: () => void
  children: ReactElement
  className?: string
}

const ActionItem = ({ color, onClick, children, className }: TActionItem) => {
  return (
    <div
      style={{ '--bg-color': color || '#fff' } as React.CSSProperties}
      onClick={onClick}
      className={[styles['action-item'], className].join(' ')}
    >
      {children}
    </div>
  )
}

export default ActionItem
