

import React, { Component } from 'react'
import style from './index.scss'

import NavBar from './navbar'
import Todos from './todos'

class Article extends Component {

    render(){

        return(
            <div className={ style.container }>
                <div className={ style.navBar }>
                    <NavBar />
                </div>
                <div className={ style.todos }>
                    <Todos />
                </div>
            </div>
        )
    }
}

export default Article





