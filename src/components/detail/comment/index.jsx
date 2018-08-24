

import React, { Component } from 'react'
import style from './index.scss'
import MentList from './mentList'

class Comment extends Component {

    constructor(props){
        super(props)

        this.state = {
            areaval:'',
            fileFocusType:false,
            like:[
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                },
                {
                    url:'/img/circle/article/todos/headImg.jpg'
                }
            ]
        }
    }

    formaction = (e) => {
        // 阻止提交
        e.preventDefault()


    }

    onChangeTextarea = (e) => {
        let val = e.target.value

        this.setState({areaval:val})
    }

    fileFocus = (e) => {
        console.log(e.target)
    }

    render(){
        let { fileFocusType } = this.state
        return(
            <div className={ style.commentbox }>

                {/* 点赞 */}
                <div className={ style.like }>
                    <ul>
                        {
                            this.state.like.map((res, i) => 
                                <li key={ i }>
                                    <img src={ res.url } alt=""/>
                                </li>
                            )
                        }
                    </ul>
                </div>
                
                {/* 评论 */}
                <form className={ style.form } onSubmit={ this.formaction }>
                    <textarea className={ style.textarea } name="words" placeholder="请输入评论" onChange={ this.onChangeTextarea } value={ this.state.areaval }></textarea>
                    <div className={ style.btnGroup }>
                        {/* 表情，图片，视频 */}
                        <span className={ style.face }>
                            <i className="iconfont icon-biaoqing"></i>
                        </span>
                        <span onClick={ this.fileFocus } className={ style.file }>
                            <label htmlFor="inputFile" className="iconfont icon-tupian"></label>
                            <input id="inputFile" autoFocus = { fileFocusType ? null : "autofocus" }  type="file"/>
                        </span>
                        <span className={ style.video }>
                            <i className="iconfont icon-shipin"></i>
                        </span>



                        {/* 提交按钮 */}
                        <input className={ style.submitbtn } type="submit"/>
                    </div>
                </form>
                
                {/* 评论列表 */}
                <MentList />
            </div>
        )
    }
}

export default Comment





