
import React, { Component } from 'react'
import style from './index.scss'


class MentList extends Component {

    constructor(props){
        super(props)

        this.state = {
            todos:[
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    userName:'陈张辉',
                    words:'语言是用来表达思想的东西',
                    replyFriend:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    userName:'刘淑菊',
                    words:'语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西语言是用来表达思想的东西',
                    replyFriend:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    userName:'陈雪琴',
                    words:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellat beatae quaerat nemo iure, illum libero explicabo hic laudantium, eligendi fuga impedit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellat beatae quaerat nemo iure, illum libero explicabo hic laudantium, eligendi fuga impedit quam sed maiores ducimus numquam ex blanditiis! Provident!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat repellat beatae quaerat nemo iure, illum libero explicabo hic laudantium, eligendi fuga impedit quam sed maiores ducimus numquam ex blanditiis! Provident! sed maiores ducimus numquam ex blanditiis! Provident!',
                    replyFriend:false
                },
                {
                    headImg:'/img/circle/article/todos/headImg.jpg',
                    userName:'陈慧琴',
                    words:'语言是用来表达思想的东西',
                    replyFriend:true
                }
            ]
        }
    }

    render(){

        return (
            <div className={ style.todosbox }>
                <ul>
                    {
                        this.state.todos.map(
                            (res, i) => 
                                <li key={ i }>
                                    {/* 头像 */}
                                    <div className={ style.headImg }>
                                        <img src={ res.headImg } alt=""/>
                                    </div>

                                    {/* 姓名及评论文字及回复朋友的名字 */}
                                    <div className={ style.ments }>
                                        <h3 className={ style.name }>{ res.userName } <i className="iconfont icon-dengji1"></i></h3>
                                        <p className={ style.words }>

                                            {/* 回复好友 */}
                                            {
                                                res.replyFriend ? <span>回复<a href="">陈雪琴</a></span> : null
                                            }

                                            {/* 评论 */}
                                            { res.words }
                                        </p>
                                        <div className={ style.times }>
                                            <span className={ style.time }>2018年8月24日 18:30</span>

                                            
                                            <span className={ style.reply }>
                                                <i className="iconfont icon-xingzhuang"></i> 88
                                            </span>
                                            <span className={ style.like }>
                                                <i className="iconfont icon-dianzan"></i>666
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            )
                    }
                    
                </ul>
            </div>
        )
    }
}

export default MentList


