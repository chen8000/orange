

import { HEADERNAVBAR, WINDOWSCROLL, DISTANCE } from './action-types'

// 导航鼠标跟随动画
export const headerNavBar = val => ( { type:HEADERNAVBAR, data:val } )

// 滚动条事件
export const windowScroll = val => ( { type:WINDOWSCROLL, data:val } )

// 导航展开收起
export const mbNavBar = val => ( { type:DISTANCE, data:val } )
