
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.scss'

class Left extends Component {
    constructor(props){
        super(props)

        this.state = {
            bar:[
                {
                    key:'导航',
                    toPath:'/admin/header',
                    icon:'icon-shouye1',
                    slid:false
                },
                {
                    key:'首页',
                    icon:'icon-shouye1',
                    slid:false,
                    child:[
                        {
                            key:'头图1',
                            toPath:'/admin/homeBanner'
                        },
                        {
                            key:'头图2',
                            toPath:'/admin/homeBanner'
                        },
                        {
                            key:'头图3',
                            toPath:'/admin/homeBanner'
                        },
                        {
                            key:'头图4',
                            toPath:'/admin/homeBanner'
                        }
                    ]
                },
                {
                    key:'圈子',
                    icon:'icon-shouye1',
                    toPath:'/admin/header',
                    slid:false
                },
                {
                    key:'管理',
                    icon:'icon-shouye1',
                    toPath:'/admin/header',
                    slid:false
                }
            ]
        }
    }

    bar = i => {
        let { bar } = this.state

        bar[i].slid = !bar[i].slid

        this.setState({ bar })
    }

    render(){
        let { bar } = this.state
        return (
            <div className={ style.left }>
                <h3 className={ style.smallOrange }>  
                    <i className="iconfont icon-guanli"></i> 
                    Small Orange
                </h3>
                <ul>
                    {
                        bar.map((res, i) => 
                            <li className={ style.root } key={ i }>
                                {
                                    res.toPath ? 
                                        // 没有子列表，直接跳转
                                        <div className={ style.bar_1 }>
                                            <NavLink className={ style.bar_1_a } to={ res.toPath }>
                                                <i className={`iconfont ${res.icon} ${ style.startLink }`}></i>
                                                <i className={ `iconfont icon-lianjie ${style.endLink}` }></i>
                                                { res.key }
                                            </NavLink>
                                        </div> 
                                        : 
                                        (
                                            // 有子列表 不跳转
                                            <div className={ style.bar_1 }>
                                                <h2 onClick={ e => this.bar(i) } 
                                                    className={ `${style.rootTitle} ${ res.slid ? style.rootTitleActive : ''}` }>
                                                    <i className={`iconfont ${res.icon}`}></i>
                                                    { res.key }
                                                    
                                                    <i className={`iconfont icon-zhankaishouqi ${ style.toChild }`}></i>
                                                </h2>
                                                {
                                                    res.slid ? 
                                                    <ul className={ style.bar_2 }>
                                                        {
                                                            res.child ? 
                                                            res.child.map(
                                                                (res, i) => 
                                                                    // 子列表直接跳转
                                                                    <li className={ style.toComponent } key={ i }>
                                                                        <NavLink to={ res.toPath }>
                                                                            <i className='iconfont icon-lianjie'></i>{ res.key }
                                                                        </NavLink>
                                                                    </li>
                                                            ) : null
                                                        }
                                                    </ul> : null
                                                }
                                                
                                            </div>
                                        )
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Left



