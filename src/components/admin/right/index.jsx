
import React, { Component } from 'react'
import style from './index.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// pages
import Pages from '../pages'

class Right extends Component {
    render(){
        let { key, icon } = this.props.res.adminPagesTitle
        
        return (
            <div className={ style.right }>
                <h2 className={ style.titleBar }>
                    <i className={`iconfont ${icon}`}></i> 
                    { key }
                </h2>
                <div className={ style.pages }>
                    <Pages/>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({res:state.reducers})
)(Right))




