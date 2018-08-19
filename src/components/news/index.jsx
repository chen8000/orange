
import React, { Component } from 'react'

// 子组件
import NewsPage from './newsPage'


class News extends Component {
    
    render(){
        // console.log(this.props)
        return (
            <div>
                <NewsPage /> 
            </div>
        )
    }
}

export default News



