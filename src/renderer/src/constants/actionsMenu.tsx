import { ReactElement } from 'react'
import { IoClose } from 'react-icons/io5'
import { LuMaximize } from 'react-icons/lu'
import { TiMinus } from 'react-icons/ti'
import { VscPinned } from 'react-icons/vsc'

interface TActionsMenu {
  label: string
  icon: ReactElement
  color?: string
  onClick: () => void
}

export const actionsMenu: TActionsMenu[] = [
  {
    label: '置顶',
    icon: <VscPinned />,
    color: '',
    onClick: () => {}
  },
  {
    label: '最小化',
    icon: <TiMinus />,
    color: '#e9c42c',
    onClick: () => {}
  },
  {
    label: '最大化',
    icon: <LuMaximize />,
    color: '#49bf2f',
    onClick: () => {}
  },
  {
    label: '关闭',
    icon: <IoClose />,
    color: '#fd5c56',
    onClick: () => {}
  }
]
