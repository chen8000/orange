
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// 子组件
import Banner from './banner'

class Home extends Component{

    render(){
        
        return (
            <Switch>
                <Route path="/admin/home/banner" component={ Banner } />
                <Redirect to="/admin/home/banner"/>
            </Switch>
        )
    }
}
export default Home




