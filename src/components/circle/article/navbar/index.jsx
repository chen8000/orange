
import React, { Component } from 'react'
import style from './index.scss'

import { addEvent, removeEvent, getElemTop, dev, getScrollTop } from '../../../../module/tools'


class NavBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            bar:[
                {
                    key:'推荐',
                    toPath:'/recommend',
                    iconCls:'icon-tuijianyouli',
                    active:true
                },
                {
                    key:'栏目栏目1',
                    toPath:'/column',
                    iconCls:'icon-social-github-octocat',
                    active:false
                },
                {
                    key:'栏目2',
                    toPath:'/column',
                    iconCls:'icon-social-github-octocat',
                    active:false
                },
                {
                    key:'栏目3',
                    toPath:'/column',
                    iconCls:'icon-social-github-octocat',
                    active:false
                },
                {
                    key:'推荐',
                    toPath:'/recommend',
                    iconCls:'icon-social-github-octocat',
                    active:false
                }
            ],
            fixedBar:false
        }
    }

    // 组件渲染完成
    componentDidMount(){
        
        if(dev().type === 'pc'){
            addEvent(window, 'scroll', this.scrollFn)
        }
    }
    // 组件将要卸载
    componentWillUnmount(){
        if(dev().type === 'pc'){
            removeEvent(window, 'scroll', this.scrollFn)
        }
    }

    // 滚动条事件
    scrollFn = () => {

        // 获取元素距离浏览器顶部的距离
        let eleTop = getElemTop(this.navbar)

        // 滚动条距离顶部的距离
        let scrollTop = getScrollTop()
        
        if(scrollTop > eleTop - 50){
            this.setState({ fixedBar:true })
        }else{
            this.setState({ fixedBar:false }) 
        }
    }

    activeClick = (i) => {
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
        let { bar, fixedBar } = this.state
        return(
            <div ref={ fixedBar => this.navbar = fixedBar }>
                <ul className={ [ style.navbar, fixedBar ? style.fixedBar : null ].join(' ') }>
                    {
                        bar.map((res, i) => 
                            <li onClick={ e => this.activeClick(i) } key={ i } 
                                className={ res.active ? style.navbaractive : null }> 
                                <i className={['iconfont', res.iconCls].join(' ')}></i> 
                                { res.key }
                            </li>
                        )
                    }
                </ul>
            </div>
            
        )
    }
}

export default NavBar





