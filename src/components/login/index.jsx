
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { headerNavBar } from '../../redux/actions'

class Login extends Component {

    // 组件渲染完成后初始化状态
    componentDidMount(){
        // 初始化动画位置
        this.props.headerNavBar({w:'0px',l:'0px'})
        
    }

    // 数据类型
    static propTypes = {
        result:PropTypes.object.isRequired,
        headerNavBar:PropTypes.func.isRequired
    }

    render(){
        
        return (
            <div>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
                login 页面<br/>
            </div>
        )
    }
}


export default connect(
    state => ({ result:state.reducers }),
    { headerNavBar }
)(Login)


