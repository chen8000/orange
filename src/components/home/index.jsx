

import React, { Component } from 'react'

// 引入子组件
import Banner from './banner'
import Todo from './todo'


class Home extends Component {

    render(){
        return (
            <div>
                <Banner />
                <Todo />
            </div>
        )
    }
}

export default Home








