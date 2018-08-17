

import React, { Component } from 'react'
import style from './index.scss'

import NavBar from './navbar'
import Todos from './todos'

class Article extends Component {

    render(){

        return(
            <div className={ style.containerBg }>
                <div className={ style.container }>
                    <div className={ style.navBar }>
                        {/* left bar */}
                        <NavBar />
                    </div>
                    <div className={ style.todos }>
                        {/* right文章列表 */}
                        <Todos />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Article





