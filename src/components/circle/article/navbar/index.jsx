
import React, { Component } from 'react'
import style from './index.scss'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            bar:[
                {
                    key:'推荐',
                    toPath:'/recommend',
                    iconCls:'icon-tuijian1',
                    active:true
                },
                {
                    key:'栏目栏目1',
                    toPath:'/column',
                    iconCls:'icon-tuijian1',
                    active:false
                },
                {
                    key:'栏目2',
                    toPath:'/column',
                    iconCls:'icon-tuijian1',
                    active:false
                },
                {
                    key:'栏目3',
                    toPath:'/column',
                    iconCls:'icon-tuijian1',
                    active:false
                }
            ]
        }
    }

    activeClick = (e, i) => {
        let { bar } = this.state

        let newbar = bar.map(res => {
            if(res.active){
                res.active = false
            }
            return res
        })

        newbar[i].active = true

        this.setState({ bar:newbar })
    }

    render(){
        let { bar } = this.state
        return(
            <ul className={ style.navbar }>
                {
                    bar.map((res, i) => 
                        <li onClick={ e => this.activeClick(e, i) } key={ i } 
                            className={ res.active ? style.navbaractive : null }> 
                            <i className={['iconfont', res.iconCls].join(' ')}></i> 
                            { res.key }
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default NavBar





