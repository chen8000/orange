

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 使用redux调试工具
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store







