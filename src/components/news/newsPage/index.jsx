
import React, { Component } from 'react'

// 子组件
import Swiper from '../swiper'
import Todos from '../todos'


class NewsPage extends Component {
    
    render(){
        
        return (
            <div>
                <Swiper />
                <Todos />
            </div>
        )
    }
}

export default NewsPage



