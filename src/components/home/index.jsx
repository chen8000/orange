

import React, { Component } from 'react'

// 引入子组件
import Banner from './banner'
import Todo from './todo'
import StylePiece from './stylePiece'
import DisplayBar from './displayBar'
import Todos from './todos'


class Home extends Component {

    render(){
        return (
            <div>
                <Banner />
                <Todo />
                <StylePiece />
                <DisplayBar />
                <Todos />
            </div>
        )
    }
}

export default Home








