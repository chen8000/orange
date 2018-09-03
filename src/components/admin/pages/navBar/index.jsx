
import React, { Component } from 'react'
import style from './index.scss'
import { connect } from 'react-redux'
import { adminPagesTitle } from '../../../../redux/actions'

class NavBar extends Component{

    componentDidMount(){

        this.props.adminPagesTitle({ title:'', icon:'' })
    }

    render(){

        return (
            <div className={ style.navbar }>
                <div className={ style.tablebox }>
                    <table className={ style.table } border='0' cellPadding='0' cellSpacing='0'>
                        <tbody>
                            <tr>
                                <th width='5%'>序号</th>
                                <th>板块</th>
                                <th>路由</th>
                                <th>操作</th>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>首页</td>
                                <td>/home</td>
                                <td><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);">删除</a></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>最新动态</td>
                                <td>/news</td>
                                <td><a href="javascript:void(0);">编辑</a><a href="javascript:void(0);">删除</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default connect(
    state => ({ res: state.reducers }),
    { adminPagesTitle }
)(NavBar)



