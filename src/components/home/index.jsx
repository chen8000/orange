

import React, { Component } from 'react'

// 引入子组件
import Banner from './banner'
import Todo from './todo'
import StylePiece from './stylePiece'


class Home extends Component {

    render(){
        return (
            <div>
                <Banner />
                <Todo />
                <StylePiece />
            </div>
        )
    }
}

export default Home








