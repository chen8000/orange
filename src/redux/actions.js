

import { HEADERNAVBAR, HEADERSCROLL, DISTANCE } from './action-types'

// 导航鼠标跟随动画
export const headerNavBar = data => ( { type:HEADERNAVBAR, data } )

// 滚动条事件
export const headerScroll = data => ( { type:HEADERSCROLL, data } )

// 导航展开收起
export const mbNavBar = data => ( { type:DISTANCE, data } )

