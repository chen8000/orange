
import React, { Component } from 'react'
import style from './index.scss'

class Header extends Component {
    render(){
        return (
            <div className={ style.header }>
                <div className={ style.left }>
                    <i className="iconfont icon-ORANGE"></i> orange
                </div>
                <div className={ style.right }>
                    {/* 设置 */}
                    <div className={ style.item }>
                        <div className={ style.setting }>
                            <i className="iconfont icon-shezhi1"></i>
                        </div>
                    </div>

                    {/* 退出登陆 */}
                    <div className={ style.item }>
                        <div className={ style.exit }>
                            <i className="iconfont icon-tuichu2"></i>
                            <span>安全退出</span>    
                        </div>
                    </div>

                    {/* 头像 */}
                    <div className={ style.item }>
                        <div className={ style.ava }>
                            <img src="/img/circle/article/todos/headImg.jpg" alt=""/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Header


