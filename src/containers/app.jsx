

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { test } from '../redux/actions'

// 自定义组件
import Header from '../components/header'
import Footer from '../components/footer'




class App extends Component {
    static propTypes = {
        res:PropTypes.array.isRequired,
        test:PropTypes.func.isRequired
    }
    render(){
        
        let {res, test} = this.props
        return (
            <div>
                <Header res={res} test={test}/>
                
                <Footer />
            </div>
        )
    }
}

export default connect(
    state => ({res:state.reducers}),
    { test }
)(App)
