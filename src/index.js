import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './redux/store'


import App from './containers/app'


render(
    (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    ), document.getElementById('root'))


