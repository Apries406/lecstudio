import {
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	ReactPortal,
} from 'react'
import styles from './index.module.styl'
interface TLayoutHeaderProps {
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
const LayoutHeader = ({ children, className }: TLayoutHeaderProps) => {
	return (
		<div className={[styles['layout-header'], className].join(' ')}>
			{children}
		</div>
	)
}

export default LayoutHeader
