
import React, { Component } from 'react'
import style from './index.scss'
import { __HOST_API__ } from '../../../../../module/globalConfig'
import RouteIcon from '../../../../commonComponents/routeIcon'
import { Link } from 'react-router-dom'

class List extends Component {

    constructor(props){
        super(props)

        this.state = {
            todo:[]
        }
    }

    componentWillMount(){

        fetch(`${ __HOST_API__ }/headerBar`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({todo:res})
            })
    }


    render(){
        let { todo } = this.state
        return (
            <div className={ style.navbar }>
                <div className={ style.addNabBar }>
                    <button className={ style.addBtn }>增加导航</button>
                </div>
                <div className={ style.tablebox }>
                    <table className={ style.table } border='0' cellPadding='0' cellSpacing='0'>
                        <tbody>
                            <tr>
                                <th width='5%'>序号</th>
                                <th width="40%">板块</th>
                                <th width="40%">
                                    <RouteIcon />
                                    路由
                                </th>
                                <th width="15%">操作</th>
                            </tr>
                            {
                                todo.map((res, i) => 
                                    <tr key={ i }>
                                        <td>{i}</td>
                                        <td>{ res.key }</td>
                                        <td>{ res.toPath }</td>
                                        <td>
                                            <Link to="/admin/navbar/edit"><button className={ style.editBtn }>编辑</button></Link>
                                            
                                            <button className={ style.deleteBtn }>删除</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default List


