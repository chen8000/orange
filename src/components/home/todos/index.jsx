
import React, { Component } from 'react'
import style from './index.scss'

import Placeholder from '../../commonComponents/placeholder'

class Todos extends Component {

    constructor(props){
        super(props)

        this.state = {
            todos:[
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/home/todos/todos1.jpg',
                    title:'标题',
                    sort:'分类'
                }
            ]
        }
    }


    render(){
        return (
            <div>
                <ul className={ style.todosBox }>
                    {
                        this.state.todos.map(
                            (res, i) => (
                                <li key={ i }>
                                    <div className={ style.content }>
                                        <Placeholder url={'/img/home/todos/placeholder.png'} />
                                        
                                        <img className={ style.imgObj } src={res.imgUrl} alt=""/>

                                        <div className={ style.textBox }>
                                            <p className={ style.title }>{ res.title }</p>
                                            <p className={ style.sort }>{ res.sort }</p>
                                        </div>  
                                    </div>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Todos


