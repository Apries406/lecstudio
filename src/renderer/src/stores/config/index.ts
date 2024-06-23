// * 设置项 store
import { create } from 'zustand'

const useConfigStore = create(() => ({
  bottomBackground:
    'radial-gradient(100% 100% at 49% 83%, rgb(255, 255, 153) 0%, rgb(255, 204, 255) 100%),    radial-gradient(100% 100% at 70% 31%, rgb(255, 153, 204) 0%, rgb(255, 204, 255) 100%),    radial-gradient(100% 100% at 18% 44%, rgb(255, 204, 255) 0%, rgb(204, 153, 255) 100%),    linear-gradient(161deg, rgb(255, 204, 255) 0%, rgb(255, 255, 153) 12%, rgb(255, 255, 153) 15%, rgb(255, 255, 153) 21%, rgb(204, 153, 255) 28%, rgb(255, 204, 255) 43%),    linear-gradient(161deg, rgb(255, 153, 204) 0%, rgb(204, 153, 255) 33%, rgb(255, 255, 204) 51%),    linear-gradient(161deg, rgb(255, 204, 255) 0%, rgb(255, 255, 204) 30%),    radial-gradient(100% 100% at 38% 59%, rgb(255, 255, 204) 0%, rgb(255, 255, 204) 100%)',
  layoutSideBarBgColor: '#fff',
  layoutContentBgColor: '#f5f5f5'
}))

export default useConfigStore
