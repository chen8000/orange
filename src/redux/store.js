
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducerFn } from './reducers'


const store = createStore(reducerFn, composeWithDevTools(applyMiddleware(thunk)))

export default store







