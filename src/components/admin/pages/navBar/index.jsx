
import React, { Component } from 'react'
import style from './index.scss'

class NavBar extends Component{

    render(){

        return (
            <div className={ style.navbar }>
                <div className={ style.tablebox }>
                    <table className={ style.table } border='0' cellpadding='0' cellspacing='0'>
                        <tbody>
                            <tr>
                                <th width='5%'>序号</th>
                                <th>板块</th>
                                <th>路由</th>
                            </tr>
                            <tr>
                                <td>111</td>
                                <td>2</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default NavBar



