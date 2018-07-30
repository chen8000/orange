

import { combineReducers } from 'redux'

import { HEADER } from './action-types'

const InitState = ['ddd']


// 一个函数
function reducerFn( state = InitState, action ){
    switch(action.type){
        case HEADER :
            
            return state
        
        default :
            return state    
    }
}


// 导出多个函数
export default combineReducers({reducerFn})






