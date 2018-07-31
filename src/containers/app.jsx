

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { headerNavBar, windowScroll } from '../redux/actions'

// 自定义组件
import Header from '../components/header'
import Footer from '../components/footer'




class App extends Component {

    // 数据类型
    static propTypes = {
        result:PropTypes.object.isRequired,
        headerNavBar:PropTypes.func.isRequired,
        windowScroll:PropTypes.func.isRequired
    }

    


    render(){
        
        let {result, headerNavBar, windowScroll} = this.props
        
        return (
            <div>
                <Header 
                    result = {result}   
                    headerNavBar = { headerNavBar }  
                    windowScroll = { windowScroll }
                    />
                
                <Footer />
            </div>
        )
    }
}

export default connect(
    state => ({ result:state.reducers }),
    { headerNavBar, windowScroll }
)(App)
