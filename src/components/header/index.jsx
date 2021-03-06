
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { __HOST_API__ } from '../../module/globalConfig'
import { addClass, hasClass, removeClass, addEvent, getScrollTop, dev } from '../../module/tools'
import style from './index.scss'

import Logo from './logo'


class Header extends Component {

    constructor(props){
        super(props)

        // mobile端的一个状态，false为pc
        this.state = {
            mbType:false,
            headerBar:[]
        }

         // 注册window scroll 事件
         this.headerScroll()
        // 监听浏览器的前进后退按钮
        addEvent(window, 'popstate', () => {
            if(this.navBarContainer){
                this.initStart()
            }
        })
    }

    // 组件将要渲染数据
    componentWillMount(){

        // 请求导航
        fetch(`${__HOST_API__}/headerBar`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                this.setState({ headerBar:res })
                
                // 初始化动画位置(需要在数据渲染后获取节点)
                this.initStart()
                // 初始化li动画 mobile
                this.mbNavBarAnimate()
            })
    }

    initStart = () => {
        // 初始化动画位置
        if(dev().type !== 'iphone' ){
            let routeActive = this.navBarContainer.childNodes
                
            for(let i = 0; i< routeActive.length; i++){
                let rouObj = routeActive[i].getElementsByClassName(style.navBarThisPage)

                if(rouObj.length > 0){
                    this.animateStore(rouObj[0])
                }
            }
        }
    }
    // 接收对象获取对象的left 和 width 改变状态
    animateStore = o => {
        let [ navBarWidth, navBarLeft ] = [ o.parentNode.clientWidth, o.parentNode.offsetLeft ]
        this.props.res.headerNavBar({w:`${navBarWidth}px`, l:`${navBarLeft}px`})    
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
        addClass(this.navBarContainer, style.navBarContainer)

        this.animateStore(e.target)
    }

    // leave
    navBarOut = e => {

        // 移走后移除ul上的class 
        removeClass(this.navBarContainer, style.navBarContainer)

        // 获取当前组件对应的面包屑
        let activeClassName = e
                                .target
                                .parentNode
                                .parentNode
                                .getElementsByClassName(style.navBarThisPage)[0]
        if(activeClassName) {
            // 如果在导航的页面，那么显示active动画
            this.animateStore(activeClassName)
        }
    }



    headerScroll = () => {
        /*
            添加滚动条事件，根据滚动条top值动态设置class
        */
        addEvent(window, 'scroll', () => {
            let scrollTop = getScrollTop()
            if(scrollTop > 100){
                this.props.res.headerScroll({ scroll:true })
            }else if(scrollTop <= 100){
                this.props.res.headerScroll({ scroll:false })
            }
        })
    }

    todosClick = () => {

        if(dev().type === 'iphone'){
            this.mbNavBarToggle(this.mobileIcon)
        }
    }


    // mobile事件
    mbNavBarToggle = e => {

        let obj = e.target ? e.target : e 

        if(hasClass(obj, style.mobileIconActive)){

            // X 收起
            removeClass(obj, style.mobileIconActive)

            this.props.res.mbNavBar({l:`-100%` })
        }else{
            
            // √ 展开
            addClass(obj, style.mobileIconActive)
            
            this.props.res.mbNavBar({l:`0px` })

        }

    }

    // 手机端初始化导航列表动画
    mbNavBarAnimate = () => {
        // 移动端 只判断手机
        if (dev().type === 'iphone') { 
            
            this.setState({ mbType:true })
            let todos = this.navBarContainer.childNodes
            let times = .3;
            for(let i = 0; i< todos.length; i++){
                if(todos[i].nodeName.toLowerCase() === 'li'){
                    todos[i].style.transition = `all ${times}s ease`

                    times += .05
                }
            }
        }
    }


    render(){
        let { result } = this.props.res
        let { headerBar } = this.state

        // console.log(this.props.res.location.pathname)
        
        return (
            <div className={
                [
                    style.header, 
                    result.scroll.type ? style.headerFixed : null,
                    result.distance.l === '0px' ? style.mbOpacity : null
                ].join(' ')
            }>
                <div className={ style.container }>
                    <div ref={ ele => this.mobileIcon = ele } onClick={ this.mbNavBarToggle } className={ style.mobileIcon }></div>
                    <div className={ style.logo }>
                        <Logo />
                    </div>
                    <div className={ style.mobileHeader }>
                        
                        <ul ref={ ele => this.navBarContainer = ele }>
                        <span style={ { width:result.headerBar.w, left:result.headerBar.l } } className={ style.navBarActive }></span>

                        {
                            // 面包屑   
                            headerBar.map((res, index) => 
                                        <li onClick = { this.todosClick } key={ index } style={ this.state.mbType ? { transform:`translate(${result.distance.l})` } : null }>
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


