

import { combineReducers } from 'redux'

import { HEADERNAVBAR, WINDOWSCROLL } from './action-types'

// 初始 state
const InitState = {
    // 导航默认值
    headerBar:{
        w:'0px',
        l:'0px'
    },

    // scroll type
    scroll:{
        type:false
    }

}
// 【注意⚠️】 请不要直接修改 state
function reducers( state = InitState, action ){
    switch(action.type){
        
        // 导航鼠标跟随动画
        case HEADERNAVBAR :
        
        //需要解构
        let { headerBar } = state
        headerBar.w = action.data.w
        headerBar.l = action.data.l
        headerBar.color = action.data.color
        
            return { headerBar, ...state }
        
        // 滚动条事件
        case WINDOWSCROLL :
            //需要解构
            
            let { scroll } = state
            scroll.type = action.data.scroll
            
            return { scroll, ...state }
            
        default :
            return state    
    }
}



// 导出多个函数
export default combineReducers({reducers})






