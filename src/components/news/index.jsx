
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// 子组件
import NewsPage from './newsPage'
import Detail from '../detail'


class News extends Component {
    
    render(){
        
        return (
            <Switch>
                <Route path="/" component={ NewsPage }/>
                <Route path="/detail" component={ Detail }/>
                <Redirect to="/"/>
            </Switch>
            // <div>
            //     <Swiper />
            //     <Todos />
            // </div>
        )
    }
}

export default News



