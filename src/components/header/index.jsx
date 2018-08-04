
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { NavBar } from '../../route/config'

import { addClass, hasClass, removeClass } from '../../module/cssClass'
import style from './index.scss'


class Header extends Component {

    // 组件渲染完成后初始化状态
    componentDidMount(){
        // 初始化动画位置
        let routeActive = this.refs.navBarContainer.childNodes
        
        for(let i = 0; i< routeActive.length; i++){
            if(routeActive[i].getElementsByClassName(style.navBarThisPage).length > 0){
                this.animateStore(routeActive[i].getElementsByClassName(style.navBarThisPage)[0])
            }
        }

        // 首页状态
        if(this.props.pathname === '/'){
            this.props.headerNavBar({w:`60px`, l:`0px`})    
        }

        // console.log(routeActive)

        // 注册window scroll 事件
        this.windowScroll()
    }
    /*
        导航动画逻辑
        1. 鼠标移动到每个节点上时获取该节点的left width 赋值给动画节点
        2. 导航到当前的页面，面包屑会添加一个class   style.navBarThisPage
        3. 鼠标再次移动到别的面包屑时，使用ref的方法获取ul 给ul添加一个class  style.navBarContainer
           使除了鼠标hover的元素其他的元素的文字改变
        4. 鼠标移走时移除ul上的class  用原生js方法获取 当前路由对应的面包屑 style.navBarThisPage
           设置动画的left  width 使其回到原点
    */ 

    // enter
    navBarActive = e => {
        // 给ul添加一个class改变所有文字的颜色
        addClass(this.refs.navBarContainer, style.navBarContainer)

        this.animateStore(e.target)
    }

    // leave
    navBarOut = e => {

        // 移走后移除ul上的class 
        removeClass(this.refs.navBarContainer, style.navBarContainer)

        // 获取当前组件对应的面包屑
        let activeClassName = e
                                .target
                                .parentNode
                                .parentNode
                                .getElementsByClassName(style.navBarThisPage)[0]
        if(activeClassName){
            this.animateStore(activeClassName)
        }
            
    }

    // 接收对象获取对象的left 和 width 改变状态
    animateStore = o => {
        let navBarWidth = o.parentNode.clientWidth
        let navBarLeft = o.parentNode.offsetLeft
        this.props.headerNavBar({w:`${navBarWidth}px`, l:`${navBarLeft}px`})    
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


    // mobile事件
    mbNavBarToggle = e => {

        if(!hasClass(e.target, style.mobileIconActive)){
            addClass(e.target, style.mobileIconActive)
        }else{
            removeClass(e.target, style.mobileIconActive)
        }

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
                    <div onClick={ this.mbNavBarToggle } className={ style.mobileIcon }>

                    </div>
                    <div className={ style.logo }>
                        <img src="/img/common/logo.png" alt=""/>
                        <img className={ style.logo_O } src="/img/common/logo_O.png" alt=""/>
                        
                    </div>
                    <div className={ style.mobileHeader }>
                        
                        <ul ref='navBarContainer'>
                        <span style={{width:result.headerBar.w, left:result.headerBar.l}} className={ style.navBarActive }></span>

                        {
                            // 面包屑   
                            NavBar.map((res, index) => 
                                        <li key={ index } >
                                            <NavLink activeClassName={ style.navBarThisPage } 
                                                    onMouseOver={ this.navBarActive } onMouseOut = { this.navBarOut } 
                                                    to={ res.toPath }>{ res.key }
                                            </NavLink>
                                        </li> 
                                    )
                        } 
                        
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Header


