
import React, { Component } from 'react'
import style from './index.scss'

class Logo extends Component {
    render(){
        return (
            <div className={ style.logo }>
                <img src="/img/common/logo.png" alt=""/>
                <img className={ style.logo_O } src="/img/common/logo_O.png" alt=""/>
            </div>
        )
    }
}

export default Logo


