
import React, { Component } from 'react'
import style from './index.scss'

class Search extends Component{
    render(){
        return (
            <div className={ style.canvasBox }>
                <iframe title="circleCanvas" src="canvas/circleCanvas.html" className={ style.canvas } frameBorder="0"></iframe>
                
                <div className={ style.searchBox }>
                    <input type="text" placeholder="输入关键字搜索" className={ style.search } />
                    <i className={ [style.searchIcon, 'iconfont', 'icon-sousuo'].join(' ') }></i>
                </div>
            </div>
        )
    }
}

export default Search



