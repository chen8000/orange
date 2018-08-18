
import React, { Component } from 'react'
import style from './index.scss'


class Todos extends Component{

    constructor(props){
        super(props)

        this.state = {
            todos:[
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item01.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item02.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item03.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item04.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item01.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item02.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item03.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                },
                {
                    userName:'zhanghui.chen',
                    userTitle:'前端开发工程师',
                    userHeadImg:'/img/circle/article/todos/headImg.jpg',
                    articleImg:'/img/circle/article/todos/item04.jpg',
                    articleTitle:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
                    articleText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eius voluptate minus inventore distinctio repellendus reprehenderit tenetur. Omnis sunt, doloribus veritatis nostrum aper',
                    collect:5,
                    like:102,
                    comment:66
                }
            ]
        }
    }

    render(){
        let { todos } = this.state
        return (
            <ul className={ style.todosBox }>
                {
                    todos.map((res, i) => 
                        <li key={ i }>
                            <div className={ style.userInfo }>
                                <div className={ style.headImg }>
                                    <img src={ res.userHeadImg } alt=""/>
                                </div>
                                <div className={ style.title }>
                                    <h2>{ res.userName }</h2>
                                    <p>{ res.userTitle }</p>
                                </div>
                            </div>
                            <div className={ style.imgBox }>
                                <img src={ res.articleImg } alt=""/>
                            </div>
                            <div className={ style.textBox }>
                                <h2>
                                    { res.articleTitle }
                                </h2>
                                <p>
                                    { res.articleText }
                                </p>
                                <div className={ style.actions }>
                                    {/* 收藏 */}
                                    <span className={ style.shoucang }><i className="iconfont icon-shoucang"></i>{ res.collect }</span>
                                    {/* 点赞 */}
                                    <span><i className="iconfont icon-dianzan"></i>{ res.like }</span>
                                    {/* 评论 */}
                                    <span><i className="iconfont icon-pinglun"></i>{ res.comment }</span>
                                </div>
                            </div>
                        </li>
                    )
                }
                
            </ul>
        )
    }
}

export default Todos





