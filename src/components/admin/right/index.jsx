
import React, { Component } from 'react'
import style from './index.scss'
import { connect } from 'react-redux'

// pages
import Pages from '../pages'

class Right extends Component {
    
    render(){
        let { adminPagesTitle } = this.props.res
        
        return (
            <div className={ style.right }>
                <h2 className={ style.titleBar }>
                    <i className={`iconfont ${adminPagesTitle.icon}`}></i> 
                    {adminPagesTitle.title}
                </h2>
                <div className={ style.pages }>
                    <Pages/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({res:state.reducers})
)(Right)




