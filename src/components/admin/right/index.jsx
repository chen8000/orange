
import React, { Component } from 'react'
import style from './index.scss'

// pages
import Pages from '../pages'

class Right extends Component {
    render(){
        return (
            <div className={ style.right }>
                <h2 className={ style.titleBar }><i className="iconfont icon-shouye1"></i> 导航</h2>
                <div className={ style.pages }>
                    <Pages/>
                </div>
            </div>
        )
    }
}

export default Right




