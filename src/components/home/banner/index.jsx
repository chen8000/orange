
import React, { Component } from 'react'
import style from './index.scss'

import { addEvent, getBodyHeight, getScrollTop } from '../../../tools'

class Banner extends Component {

    constructor(props){
        super(props)

        // 获取body的高度
        let bodyH = getBodyHeight()

        this.state = {
            bodyH,
            translateY:0
        }


        // 注册滚动条事件
        this.windowScroll();
    }

    // 滚动条事件
    windowScroll = () =>{
        addEvent(window, 'scroll', () => {
            // 修改图片的 translateY
            let scrollTop = getScrollTop()
            if(scrollTop < this.state.bodyH){
                console.log('呵呵')
                this.setState({translateY:scrollTop / 5})
            }
            
        })
    }

    render() {
        let { bodyH, translateY } = this.state
        return (
            <div className={ style.banner } style={{height:bodyH}}>
                <img className={ style.bannerBg } style={{ transform:`translateY(${translateY}px)`}} src="/img/home/banner/banner.jpg" alt=""/>
                
                
                <div className={ style.linkCase }>
                    <a href="https://github.com/chen8000" target="_blank" rel="noopener noreferrer">
                        <i className="iconfont icon-github3"></i>
                        GitHub
                        <span className="iconfont icon-jiantou1-copy"></span>
                    </a>
                    <a href="https://www.cnblogs.com/chefweb/" target="_blank" rel="noopener noreferrer">
                        <i className="iconfont icon-bokeyuan"></i>
                        博客园
                        <span className="iconfont icon-jiantou1-copy"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Banner




