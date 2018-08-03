
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { Login, NavBar } from '../../route/config'

import style from './index.scss'


class Header extends Component {

    // 组件渲染完成后初始化状态
    componentDidMount(){

        // 初始化动画位置
        this.props.headerNavBar({w:'60px',l:'0px'})

        // 注册window scroll 事件
        this.windowScroll()
        
    }

    // enter
    navBarActive = e => {
        // 获取节点的 width left
        // let links = e.target.parentNode.parentNode.childNodes


        // e.target.parentNode.childNodes.className += ` ${ style.navHoverBar }`
        let navBarWidth = e.target.parentNode.clientWidth
        let navBarLeft = e.target.parentNode.offsetLeft

        this.props.headerNavBar({w:`${navBarWidth}px`, l:`${navBarLeft}px`})
    }

    // leave
    navBarOut = e => {
        // e.target.className = e.target.className.replace(style.navHoverBar, '').trim()
            
    }

    windowScroll = () => {
        /*
            添加滚动条事件，根据滚动条top值动态设置class
        */
       window.addEventListener('scroll', () => {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if(scrollTop > 100 ){
                this.props.windowScroll({ scroll:true })
            }else if(scrollTop <= 20){
                this.props.windowScroll({ scroll:false })
            }
        })
    }

    

    render(){
        let { result } = this.props
        
        return (
            <div className={
                [
                    style.header, 
                    result.scroll.type ? style.headerFixed : null
                ].join(' ')
            }>
                <div className={ style.container }>
                    <div className={ style.logo }>
                        <img src="/img/common/logo.png" alt=""/>
                        <img className={ style.logo_O } src="/img/common/logo_O.png" alt=""/>
                        
                    </div>
                    <div className={ style.login }>
                        {
                            // 登陆 注册
                            Login.map((res, index) => <NavLink to={ res.toPath } key={ index } >{ res.key }</NavLink>)
                        }
                    </div>
                    <ul>
                       <span style={{width:result.headerBar.w, left:result.headerBar.l}} className={ style.navBarActive }></span>

                       {
                        // 面包屑   
                           NavBar.map((res, index) => 
                                    <li key={ index } >
                                        <NavLink 
                                            activeClassName={ style.navBarThisPage } 
                                            onMouseEnter={ this.navBarActive } 
                                            onMouseLeave = { this.navBarOut } 
                                            to={ res.toPath }>{ res.key }
                                        </NavLink>
                                    </li> 
                                )
                       } 
                       
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header


