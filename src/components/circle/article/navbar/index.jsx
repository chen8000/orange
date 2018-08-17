
import React, { Component } from 'react'
import style from './index.scss'
import { NavLink } from 'react-router-dom'

import { ArticleLeftBar } from '../../../../route/config'


class NavBar extends Component {

    render(){
        return(
            <ul>
                {
                    ArticleLeftBar.map((res, i) => 
                        <li key={i}>
                            <NavLink to={ res.toPath }> { res.key } </NavLink>
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default NavBar





