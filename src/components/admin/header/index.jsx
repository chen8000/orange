
import React, { Component } from 'react'
import style from './index.scss'

class Header extends Component {
    render(){
        return (
            <div className={ style.header }>
                <div className={ style.left }>
                    <img src="/img/admin/header/logo.png" alt=""/>
                </div>
                <div className={ style.right }>

                </div>
            </div>
        )
    }
}

export default Header


