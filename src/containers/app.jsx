

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { headerNavBar, headerScroll, mbNavBar } from '../redux/actions'
// app style
import style from './app.scss'

// 自定义组件(前端)
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import AboutUs from '../components/aboutUs'
import News from '../components/news'
import Circle from '../components/circle'
import GoTop from '../components/goTop'
import Detail from '../components/detail'
import Contact from '../components/contact'

// 自定义组件(后台)
import Admin from '../components/admin'

class App extends Component {

    // 数据类型
    static propTypes = {
        result:PropTypes.object.isRequired,
        headerNavBar:PropTypes.func.isRequired,
        headerScroll:PropTypes.func.isRequired,
        mbNavBar:PropTypes.func.isRequired,
    }


    render(){
        
        let {  ...res } = this.props

        let pathname = this.props.location.pathname.split('/')

        if(!pathname.includes('admin')){
            return (
                <div className={ style.app }>
                    <Header res = { res } />
                        <Switch>
                            <Route path="/home" component={ Home } />
                            <Route path="/aboutUs" component={ AboutUs } />
                            <Route path="/news" component={ News } />
                            <Route path="/circle" component={ Circle } />
                            <Route path="/detail" component={ Detail }/>
                            <Contact path="/contact" component={ Contact } />
                            <Redirect to="/home"/>
                        </Switch>
                    <GoTop />
                    <Footer />
                </div>
            )
        }else{
            return (
                // <div>
                    <Switch>
                        <Route path="/admin" component={ Admin } />
                        <Redirect to="/admin" />
                    </Switch>
                // </div>
            )
        }
        
        
    }
}

export default withRouter(connect(
    state => ({ result:state.reducers }),
    { headerNavBar, headerScroll, mbNavBar }
)(App))
