
import React, { Component } from 'react'
import style from './index.scss'

import { addEvent, removeEvent, getBodyHeight, getScrollTop } from '../../../module/tools'

class Banner extends Component {

    constructor(props){
        super(props)
        this.state = {

            // 获取body的高度
            bodyH:getBodyHeight(),

            // 设置banner的y值 默认0
            translateY:0
        }


        // 注册滚动条事件
        addEvent(window, 'scroll', this.winScrollCollback)
    }

    // 组件卸载后移除window的scroll事件
    componentWillUnmount(){
        removeEvent(window, 'scroll', this.winScrollCollback)
    }

    // window的滚动回调事件
    winScrollCollback = () => {
        // 修改图片的 translateY
        let scrollTop = getScrollTop()

        // banner滚完后不调用setState修改数据
        if(scrollTop < this.state.bodyH){
            this.setState({translateY:scrollTop / 8})
        }
    }

    // 动态设置banner的高度
    bannerLoad = h => {
        if(h < this.state.bodyH){
            this.setState({ bodyH:h })
        }
    }

    render() {
        let { bodyH, translateY } = this.state
        return (
            <div className={ style.banner } style={{height:bodyH}}>
                <img onLoad = { e => { this.bannerLoad(e.target.height) } } className={ style.bannerBg } style={{ transform:`translateY(${translateY}px)`}} src="/img/home/banner/banner.jpg" alt=""/>
                
                
                <div className={ style.linkCase }>
                    <a href="https://github.com/chen8000" target="_blank" rel="noopener noreferrer">
                        <i className="iconfont icon-social-github-octocat"></i>
                        GitHub
                        <span className="iconfont icon-jiantou1-copy"></span>
                    </a>
                    <a href="https://www.cnblogs.com/chefweb/" target="_blank" rel="noopener noreferrer">
                        <i className="iconfont icon-yumaobi"></i>
                        博客园
                        <span className="iconfont icon-jiantou1-copy"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Banner




