
import React, { Component } from 'react'
import style from './index.scss'

class RouteIcon extends Component {

    render(){
        return (
            <div className={style.routerIcon}>
                <i className={`iconfont ${style.routerMax} icon-shezhi2`}></i>
                <i className={`iconfont ${style.routerMin1} icon-shezhi`}></i>
                <i className={`iconfont ${style.routerMin2} icon-shezhi2`}></i>
            </div>
        )
    }
}

export default RouteIcon



