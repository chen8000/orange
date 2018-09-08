
import React, { Component } from 'react'
import style from './index.scss'
import { connect } from 'react-redux'
import { adminPagesTitle } from '../../../../redux/actions'
import { leftTitleInfo } from '../../config'

class Welcome extends Component{

    constructor(props){
        super(props)

        // 修改页面title
        this.props.adminPagesTitle(leftTitleInfo(this.props))
    }

    render(){

        return (
            <div className={ style.welcome }>
                welcome
            </div>
        )
    }
}

export default connect(
    state => ({ res: state.reducers }),
    { adminPagesTitle }
)(Welcome)



