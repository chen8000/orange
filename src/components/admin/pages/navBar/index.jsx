
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adminPagesTitle } from '../../../../redux/actions'
import { thisPageInfo } from '../../config'
import { Switch, Route, Redirect } from 'react-router-dom'

// 子组件
import List from './list'
import Edit from './edit'

class NavBar extends Component{

    constructor(props){
        super(props)

        // 修改页面标题
        this.props.adminPagesTitle(thisPageInfo(this.props))
        
    }

    
    render(){
        
        return (
            <Switch>
                <Route path="/admin/navBar" component={ List } exact/>
                <Route path="/admin/navbar/edit" component={ Edit } />
                <Redirect to="/admin/navBar"/>
            </Switch>
        )
    }
}

export default connect(
    state => ({ res: state.reducers }),
    { adminPagesTitle }
)(NavBar)



