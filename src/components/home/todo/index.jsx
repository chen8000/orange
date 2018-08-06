

import React, { Component } from 'react'
import homeStyle from './index.scss'

class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {
            todo:[
                {title:'晚霞', imgUrl:'/img/home/todo/todos1.jpg'},
                {title:'枫叶🍁', imgUrl:'/img/home/todo/todos2.jpg'},
                {title:'鸟巢', imgUrl:'/img/home/todo/todos3.jpg' },
                {title:'故宫', imgUrl:'/img/home/todo/todos4.jpg'},
                {title:'航空工业', imgUrl:'/img/home/todo/todos5.jpg'},
                {title:'SOHO', imgUrl:'/img/home/todo/todos6.jpg'}
            ]
        }
    }

    render(){
        return (
            <div className={ homeStyle.todo }>
                <h2>推荐</h2>
                <ul>
                    {
                        this.state.todo.map((res, index) => 
                            <li key={index}>
                                <img className={ homeStyle.placeholder } src="/img/common/placeholder.png" alt=""/>
                                <div className={ homeStyle.todos }>
                                    <img src={res.imgUrl} alt=""/>
                                    <h2>{res.title}</h2>
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








