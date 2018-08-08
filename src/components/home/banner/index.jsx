
import React, { Component } from 'react'
import style from './index.scss'
class Banner extends Component {

    render() {
        return (
            <div className={ style.banner }>
                <img className={ style.bannerBg } src="/img/home/banner/banner.jpg" alt=""/>
                <div className={ style.linkCase }>
                    <a href=""><i className="iconfont icon-github3"></i>GitHub</a><br/>
                    <a href=""><i className="iconfont icon-bokeyuan"></i>博客园</a>
                </div>
            </div>
        )
    }
}

export default Banner




