
import React, { Component } from 'react'
import style from './index.scss'

class Banner extends Component {

    render() {
        return (
            <div className={ style.banner }>
                <img className={ style.bannerBg } src="/img/home/banner/banner.jpg" alt=""/>
            </div>
        )
    }
}

export default Banner




