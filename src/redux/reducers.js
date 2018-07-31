

import { combineReducers } from 'redux'

import { HEADER, HEADERNAVBAR } from './action-types'


// 一个函数
const InitState = {

    // 导航默认值
    headerBar:{
        w:'0px',
        l:'0px'
    }
}
// 【注意⚠️】 请不要直接修改 state
function reducers( state = InitState, action ){
    switch(action.type){
        case HEADER :
            return state

        case HEADERNAVBAR :
            return { 
                headerBar:{
                    w:`${action.data.w}px`,
                    l:`${action.data.l}px`
                }
            }
            
        default :
            return state    
    }
}



// 导出多个函数
export default combineReducers({reducers})






