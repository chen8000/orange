
import { HEADER } from './action-types'

const InitState = ['ddd']

export function reducerFn( state = InitState, action ){
    switch(action.type){
        case HEADER :
            return state
        
        default :
            return state    
    }
}






