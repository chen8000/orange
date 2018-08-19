
import React, { Component } from 'react'
import style from './index.scss'

import { addEvent, getScrollTop, goTop } from '../../module/tools'

class GoTop extends Component {

    constructor(props){
        super(props)

        this.state = {
            goTopShow:false
        }

        // 注册滚动条事件
        addEvent(window, 'scroll', this.winScroll)
    }
    // 滚动条触发函数
    winScroll = () => {
        let scrollTop = getScrollTop()

        if(scrollTop > 500){
            this.setState({ goTopShow:true })
        }else{
            this.setState({ goTopShow:false }) 
        }
    }

    // 点击
    goScrollTop = () => {
        goTop(0)
    }

    render(){
        let { goTopShow } = this.state
        return (
            <div onClick={ this.goScrollTop } className={ [style.goTop, goTopShow ? style.goTopShow : style.goTopHide].join(' ') }>
                <i className="iconfont icon-huidaodingbu"></i>
            </div>
        )
    }
}

export default GoTop







