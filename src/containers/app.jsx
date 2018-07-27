import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { headerFn } from '../redux/actions'

import Header from '../components/header'





class App extends Component {
    static propTypes = {
        res:PropTypes.array.isRequired,
        headerFn:PropTypes.func.isRequired
    }
    render(){
        console.log(this.props)
        let {res, headerFn} = this.props
        return (
            <div>
                <Header res={res} headerFn={headerFn}/>
                hello Orange
            </div>
        )
    }
}

export default connect(
    state => ({res:state.reducerFn}),
    { headerFn }
)(App)
