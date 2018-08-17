

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { headerNavBar } from '../../redux/actions'

// 引入子组件
import Banner from './banner'
import Todo from './todo'
import StylePiece from './stylePiece'
import DisplayBar from './displayBar'
import Todos from './todos'


class Home extends Component {

    componentDidMount(){
        // 只要加载home组件就修改动画的位置为初始位置
        this.props.headerNavBar({w:`60px`, l:`0px`}) 
    }

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

export default connect(
    state => ({res:state.reducers}),
    { headerNavBar }
)(Home)








