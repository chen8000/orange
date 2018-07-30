

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { test } from '../redux/actions'

import Header from '../components/header'





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
                hello Orange
            </div>
        )
    }
}

export default connect(
    state => ({res:state.reducers}),
    { test }
)(App)
