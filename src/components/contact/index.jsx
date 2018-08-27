
import React, { Component } from 'react'
import style from './index.scss'
import { getBodyHeight } from '../../module/tools'

class Contact extends Component {

    constructor(props){
        super(props)
        
        this.state = {

            // 容器的高度
            h:null,

            mobileTab:false,

            // 输入域val
            enterVal:'',

            // friend list
            friendList:[
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:true
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'陈张辉',
                    abb:'666哈哈哈',
                    friendActive:false
                }
            ],

            // 说的话
            infos:[
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'你好呵呵呵',
                    my:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'666',
                    my:true
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'你好呵呵呵',
                    my:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'888',
                    my:true
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'你好呵呵呵',
                    my:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'666',
                    my:true
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'你好呵呵呵',
                    my:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'888',
                    my:true
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'你好呵呵呵',
                    my:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'666',
                    my:true
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'你好呵呵呵',
                    my:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    username:'username',
                    info:'888',
                    my:true
                }
            ]
        
        }
    }

    componentDidMount(){
        // 设置容器的高度为body的高度
        this.setState({ h:getBodyHeight() })

        // 显示最新内容
        this.scrollView.scrollIntoView()
    }

    // 提交
    enter = (e) => {

        e.preventDefault()
    }

    // 输入域
    enterInput = (e) => {
        this.setState({enterVal:e.target.value})
    }

    // 联系人
    mobileFriend = () => {
        this.setState({ mobileTab:false })
    }
    // 发送信息
    mobileInfos = () => {
        this.setState({ mobileTab:true })
    }

    render(){

        let { h, friendList, enterVal, infos, mobileTab } = this.state

        return (
            <div style={{height:h}} className={ style.bodyBg }>
                <div className={ style.contact }>

                    {/* left */}
                        <div className={ [style.left, mobileTab ? style.mobileTab : null].join(' ') }>
                            <ul>
                                {
                                    friendList.map(
                                        (res, i) => 
                                        <li key={ i } className={ [style.friendList, res.friendActive ? style.friendActive : null].join(' ') }>
                                            <div className={ style.friendInfo }>
                                                <div className={ style.headImg }>
                                                    <img src={ res.headImg } alt=""/>
                                                </div>
                                                <div className={ style.username }>
                                                    <h3>{ res.username }</h3>
                                                    <p>{ res.abb }</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                                
                            </ul>
                        </div>

                    {/* right */}
                        <div className={ [style.right, mobileTab ? null : style.mobileTab].join(' ') }>
                        <div className={ style.info }>
                            <div className={ style.infobar }>
                                <h3>username</h3>
                                <i className="iconfont icon-danren"></i>
                            </div>
                            <div className={ style.infoContainer }>
                                {/* 
                                    显示信息
                                    1. 头像
                                    3. 信息
                                    4. name
                                */}
                                {
                                    infos.map(
                                        (res, i) => 
                                        <div key={ i } className={ res.my ? style.infoRight : style.infoLeft }>
                                            <div className={ style.infoImg }>
                                                <img src={ res.headImg } alt=""/>
                                            </div>
                                            <div className={ style.infos }>
                                                <h3>{ res.username }</h3>
                                                <p>{ res.info }</p>
                                            </div>
                                        </div>
                                    )
                                }
                                <div ref={ d => this.scrollView = d }></div>
                            </div>
                        </div>
                        <div className={ style.enter }>
                            <form action="" onSubmit={ this.enter } className={ style.form }>
                                <div className={ style.textarea }>
                                    <textarea onChange={ this.enterInput } value={ enterVal }></textarea>
                                    <input className={ style.submit } type="submit" value="发送"/>
                                </div>
                            </form>
                        </div>
                    </div>
                
                    {/* mobile bar */}
                    <div className={ style.mobilebar }>
                        <span onClick = { this.mobileFriend }>
                            <i className="iconfont icon-danren"></i>
                        </span>
                        <span onClick = { this.mobileInfos }>
                            <i className="iconfont icon-xingzhuang"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact




