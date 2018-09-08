
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.scss'
import { bar, barTitle } from '../config'

class Left extends Component {
    constructor(props){
        super(props)

        this.state = { bar, barTitle }
    }

    bar = index => {
        let { bar } = this.state

        bar.map((res, i) => {
            if(res.slid & i !== index){
                res.slid = false
            }
            return res
        })

        bar[index].slid = !bar[index].slid
        this.setState({ bar })
    }
    // 修改 pages title
    // pagesTitle = res => {
    //     this.props.adminPagesTitle({title:res.key, icon:res.icon})  
    // }

    render(){
        let { bar, barTitle } = this.state
        return (
            <div className={ style.left }>
                <h3 className={ style.smallOrange }>  
                    <NavLink to={ barTitle[0].toPath }>
                        <i className={`iconfont ${ barTitle[0].icon }`}></i> 
                        { barTitle[0].key }
                    </NavLink>
                </h3>
                <ul>
                    {
                        bar.map((res, i) => 
                            <li className={ style.root } key={ i }>
                                {
                                    res.toPath ? 
                                        // 没有子列表，直接跳转
                                        <div className={ style.bar_1 }>
                                            <NavLink activeClassName={ style.thisLink } 
                                                className={ style.bar_1_a } 
                                                to={ res.toPath }>

                                                <i className={`iconfont ${res.icon} ${ style.startLink }`}></i>
                                                <i className={ `iconfont icon-lianjie ${style.endLink}` }></i>
                                                { res.key }
                                            </NavLink>
                                        </div> 
                                        : 
                                        (
                                            // 有子列表 不跳转
                                            <div className={ style.bar_1 }>
                                                <h2 onClick={ e => this.bar(i)  } 
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
                                                                (resC, i) => 
                                                                    // 子列表直接跳转
                                                                    <li 
                                                                        
                                                                        className={ style.toComponent } key={ i }>
                                                                        <NavLink activeClassName={ style.thisLink } to={ resC.toPath }>
                                                                            <i className='iconfont icon-lianjie'></i>{ resC.key }
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



