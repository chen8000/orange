

import { HEADERNAVBAR, WINDOWSCROLL } from './action-types'

// 导航鼠标跟随动画
export const headerNavBar = val => ( { type:HEADERNAVBAR, data:val } )

// 滚动条事件
export const windowScroll = val => ( { type:WINDOWSCROLL, data:val } )



