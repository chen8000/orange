
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// 子组件
import Home from './home'
import NavBar from './navBar'

class Pages extends Component{

    render(){
        return (
            <div>
                <Switch>
                    <Route path="/admin" component={ Home } exact/>
                    <Route path="/admin/navbar" component={ NavBar } exact/>
                    <Redirect to="/admin"/>
                </Switch>
            </div>
        )
    }
}

export default Pages



