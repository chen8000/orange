

import React, { Component } from 'react'
import homeStyle from './index.scss'

import Placeholder from '../../commonComponents/placeholder'

class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {
            todo:[
                {imgUrl:'/img/home/todo/todos1.jpg'},
                {imgUrl:'/img/home/todo/todos2.jpg'},
                {imgUrl:'/img/home/todo/todos3.jpg' },
                {imgUrl:'/img/home/todo/todos2.jpg'},
                {imgUrl:'/img/home/todo/todos1.jpg'},
                {imgUrl:'/img/home/todo/todos2.jpg'},
                {imgUrl:'/img/home/todo/todos3.jpg' },
                {imgUrl:'/img/home/todo/todos2.jpg'},
            ]
        }
    }

    render(){
        return (
            <div className={ homeStyle.todo }>
                <h2>zhanghui.chen</h2>
                <ul>
                    {
                        this.state.todo.map((res, index) => 
                            <li key={index}>

                                <Placeholder url={`/img/home/todo/placeholder.png`}/>
                                <div className={ homeStyle.todos }>
                                    <p>img title</p>
                                    <img src={res.imgUrl} alt=""/>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Todo








