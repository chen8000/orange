

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { headerNavBar, headerScroll, mbNavBar } from '../redux/actions'

// 自定义组件
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'
import AboutUs from '../components/aboutUs'
import News from '../components/news'
import Circle from '../components/circle'
import GoTop from '../components/goTop'
// import Detail from '../components/detail'


// app style
import style from './app.scss'



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
        
        return (
            <div className={ style.app }>
                <Header res = { res } />

                    <Switch>
                        <Route path="/home" component={ Home } />
                        <Route path="/aboutUs" component={ AboutUs } />
                        <Route path="/news" component={ News } />
                        <Route path="/circle" component={ Circle } />
                        {/* <Route path="/detail/:id" component={ Detail }/> */}
                        <Redirect to="/home"/>
                    </Switch>
                <GoTop />
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({ result:state.reducers }),
    { headerNavBar, headerScroll, mbNavBar }
)(App))
