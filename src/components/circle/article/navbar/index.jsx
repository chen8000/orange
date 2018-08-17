
import React, { Component } from 'react'
import style from './index.scss'
import { NavLink } from 'react-router-dom'

import { ArticleLeftBar } from '../../../../route/config'


class NavBar extends Component {

    render(){
        return(
            <div className={ style.navbar }>
                {
                    ArticleLeftBar.map((res, i) => 
                        <NavLink key={ i } to={ res.toPath }> { res.key } </NavLink>
                    )
                }
            </div>
        )
    }
}

export default NavBar





