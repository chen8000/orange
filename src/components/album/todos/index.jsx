
import React, { Component } from 'react'
import style from './index.scss'
import Placeholder from '../../commonComponents/placeholder'


class Todos extends Component {

    constructor(props){
        super(props)

        this.state = {
            todos:[
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚'
                }
            ]
        }
    }
    
    render(){
        return (
            <div className={ style.container }>
                <div className={ style.todos }>
                    <h2 className={ style.title }>最新</h2>

                    {/* 大盒子 */}
                    <div className={ style.itemMax }>
                        <div className={ style.layout }>
                                <div className={ style.focusImgbox }>
                                    <Placeholder url={'/img/album/todos/placeholder_max.png'}/>
                                    <img className={ style.focusImg } src="/img/album/todos/item01.jpg" alt=""/>
                                </div>
                                
                                <div className={ style.info }>
                                    <h2>
                                        OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！
                                    </h2>
                                    <p>
                                        <span className={ style.source }>
                                            <img src="/img/album/todos/item01.jpg" alt=""/>
                                            <span>zhanghui.chen</span>
                                        </span>
                                        <span className={ style.times }>刚刚</span>
                                    </p>
                                </div>
                            </div>
                    </div>

                    {/* 小盒子 */}
                    {
                        this.state.todos.map((res, i) => 
                            <div key={ i } className={ style.itemMin }>
                                <div className={ style.layout }>
                                    <div className={ style.focusImgbox }>
                                        <Placeholder url={'/img/album/todos/placeholder_min.png'}/>
                                        <img className={ style.focusImg } src={ res.imgUrl } alt=""/>
                                    </div>
                                    
                                    <div className={ style.info }>
                                        <h2>
                                            { res.title }
                                        </h2>
                                        <p>
                                            <span className={ style.source }>
                                                <img src={ res.headImg } alt=""/>
                                                <span>{ res.userName }</span>
                                            </span>
                                            <span className={ style.times }>{ res.times }</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                    
                    
                </div>
            </div>
        )
    }
}

export default Todos




