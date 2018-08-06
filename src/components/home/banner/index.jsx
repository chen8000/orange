
import React, { Component } from 'react'

import style from './index.scss'

class Banner extends Component {

    render() {
        return (
            <div className={ style.banner }>
                {/* 文档流占位 */}
                <img className={ style.placeholder } src="/img/home/banner/placeholder.png" alt=""/>
                <div className={ style.fixedCase }>
                    {/* fiexd 占位 保证跟文档流位置一样大小 */}
                    <img className={ style.placeholder } src="/img/home/banner/placeholder.png" alt=""/>
                    <img className={ style.bannerBg } src="/img/home/banner/banner.jpg" alt=""/>
                </div>
            </div>
        )
    }
}

export default Banner




