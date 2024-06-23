import TopBar from '@components/topbar'
import { useConfigStore } from '@stores/index'
import { initTheme } from '@utils/initTheme'
import { useEffect } from 'react'
import styles from './App.module.styl'
import { LayoutContent, LayoutHeader, LayoutSideBar } from './layout/index'

const App = () => {
  // 初始化 主题
  const configStore = useConfigStore((state) => state)
  useEffect(() => {
    initTheme(configStore)
  }, [])

  return (
    <div className={styles['uki-app']}>
      <div className={styles['deep-bg']} />
      <LayoutHeader className={styles['header']}>
        <TopBar />
      </LayoutHeader>
      <div className={styles['main-container']}>
        <LayoutSideBar className={styles['sidebar']}>SideBar</LayoutSideBar>
        <LayoutContent className={styles['content']}>Content</LayoutContent>
      </div>
    </div>
  )
}

export default App
