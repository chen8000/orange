

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { headerNavBar, windowScroll, mbNavBar } from '../redux/actions'

// 自定义组件
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import AboutUs from '../components/aboutUs'
import Album from '../components/album'
import Article from '../components/article'
import VideoPage from '../components/videoPage'


// app style
import style from './app.scss'





class App extends Component {

    // 数据类型
    static propTypes = {
        result:PropTypes.object.isRequired,
        headerNavBar:PropTypes.func.isRequired,
        windowScroll:PropTypes.func.isRequired,
        mbNavBar:PropTypes.func.isRequired,
    }




    render(){

        // 获取url后面的地址
        let pathname = this.props.location.pathname
        
        let {  result, headerNavBar, windowScroll, mbNavBar } = this.props
        
        return (
            <div className={ style.app }>
                <Header pathname = { pathname } result = {result} mbNavBar = { mbNavBar } headerNavBar = { headerNavBar } windowScroll = { windowScroll }/>

                    <Switch>
                        <Route path="/home" component={ Home }/>
                        <Route path="/aboutUs" component={ AboutUs } />
                        <Route path="/album" component={ Album } />
                        <Route path="/article" component={ Article } />
                        <Route path="/videoPage" component={ VideoPage } />
                        <Redirect to="/home"/>
                    </Switch>

                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({ result:state.reducers }),
    { headerNavBar, windowScroll, mbNavBar }
)(App))
