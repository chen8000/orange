
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// 子组件
import Welcome from './welcome'
import Home from './home'
import NavBar from './navBar'

class Pages extends Component{

    render(){
        
        return (
            <div>
                <Switch>
                    <Route path="/admin/welcome" component={ Welcome } exact/>
                    <Route path="/admin/home" component={ Home } />
                    <Route path="/admin/navbar" component={ NavBar } />
                    <Redirect to="/admin/welcome"/>
                </Switch>
            </div>
        )
    }
}

export default Pages



