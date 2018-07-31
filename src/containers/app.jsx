

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { test, headerNavBar } from '../redux/actions'

// 自定义组件
import Header from '../components/header'
import Footer from '../components/footer'




class App extends Component {
    static propTypes = {
        res:PropTypes.object.isRequired,
        test:PropTypes.func.isRequired,
        headerNavBar:PropTypes.func.isRequired
    }
    render(){
        
        let {res, test, headerNavBar} = this.props
        
        return (
            <div>
                <Header res={res} headerNavBar={ headerNavBar } test={test}/>
                
                <Footer />
            </div>
        )
    }
}

export default connect(
    state => ({res:state.reducers}),
    { test, headerNavBar }
)(App)
