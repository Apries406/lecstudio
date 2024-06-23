import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'
import styles from './index.module.styl'
interface TLayoutContentProps {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined
  className?: string
}
const LayoutContent = ({ children, className }: TLayoutContentProps) => {
  return <div className={[styles['layout-content'], className].join(' ')}>{children}</div>
}

export default LayoutContent
