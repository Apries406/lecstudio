import {
	JSXElementConstructor,
	ReactElement,
	ReactNode,
	ReactPortal,
} from 'react'
import styles from './index.module.styl'
interface TLayoutSideBarProps {
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

const LayoutSideBar = ({ children, className }: TLayoutSideBarProps) => {
	return (
		<div className={[styles['layout-side-bar'], className].join(' ')}>
			{children}
		</div>
	)
}

export default LayoutSideBar
