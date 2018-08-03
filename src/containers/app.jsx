

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { headerNavBar, windowScroll } from '../redux/actions'

// 自定义组件
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import Login from '../components/login'
import DoLogin from '../components/doLogin'




class App extends Component {

    // 数据类型
    static propTypes = {
        result:PropTypes.object.isRequired,
        headerNavBar:PropTypes.func.isRequired,
        windowScroll:PropTypes.func.isRequired
    }




    render(){
        
        let { result, headerNavBar, windowScroll } = this.props
        
        return (
            <div>
                <Header result = {result} headerNavBar = { headerNavBar } windowScroll = { windowScroll }/>

                    <Switch>
                        <Route path="/home" component={ Home }/>
                        <Route path="/login" component={ Login } />
                        <Route path="/doLogin" component={ DoLogin } />
                        <Redirect to="/home"/>
                    </Switch>

                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({ result:state.reducers }),
    { headerNavBar, windowScroll }
)(App))
