
import React, { Component } from 'react'
import style from './index.scss'
class Banner extends Component {

    render() {
        return (
            <div className={ style.banner }>
                <img className={ style.bannerBg } src="/img/home/banner/banner.jpg" alt=""/>
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




