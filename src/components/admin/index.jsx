
import React, { Component } from 'react'
import style from './index.scss'
import { getBodyHeight } from '../../module/tools'

// 子组件
import Header from './header'
import Left from './left'
import Right from './right'


class Admin extends Component {

    constructor(props){
        super(props)

        this.state = {

            // 设置body的高度为视图的高度
            bodyH:getBodyHeight()
        }
    }

    render(){
        let { bodyH } = this.state

        return (
            <div style={{height:bodyH}} className={ style.body }>
                <Header />
                <Left />
                <Right />
            </div>
        )
    }
}

export default Admin


