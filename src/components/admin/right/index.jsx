
import React, { Component } from 'react'
import style from './index.scss'

// pages
import Pages from '../pages'

class Right extends Component {
    render(){
        return (
            <div className={ style.right }>
                <Pages/>
            </div>
        )
    }
}

export default Right




