
import React, { Component } from 'react'
import style from './index.scss'

class DisplayBar extends Component {

    render(){
        return(
            <div className={ style.bar } >
                <img src="/img/home/displayBar/bg.jpg" alt=""/>
            </div>
        )
    }
}

export default DisplayBar


