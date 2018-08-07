
import React, { Component } from 'react'
import style from './index.scss'

// 占位组件
import Placeholder from '../../commonComponents/placeholder'

class Banner extends Component {

    render() {
        return (
            <div className={ style.banner }>
                
                <Placeholder url={`/img/home/banner/placeholder.png`}/>

                <div className={ style.fixedCase }>
                    
                    <Placeholder url={`/img/home/banner/placeholder.png`}/>

                    <img className={ style.bannerBg } src="/img/home/banner/banner.jpg" alt=""/>

                </div>
            </div>
        )
    }
}

export default Banner




