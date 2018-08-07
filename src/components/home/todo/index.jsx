

import React, { Component } from 'react'
import homeStyle from './index.scss'

import Placeholder from '../../commonComponents/placeholder'

class Todo extends Component {

    constructor(props){
        super(props)

        this.state = {
            todo:[
                {title:'晚霞', imgUrl:'/img/home/todo/todos1.jpg'},
                {title:'枫叶🍁', imgUrl:'/img/home/todo/todos2.jpg'},
                {title:'鸟巢', imgUrl:'/img/home/todo/todos3.jpg' }
            ]
        }
    }

    render(){
        return (
            <div className={ homeStyle.todo }>
                <h1>zhanghui.chen</h1>
                <ul>
                    {
                        this.state.todo.map((res, index) => 
                            <li key={index}>

                                <Placeholder url={`/img/common/placeholder.png`}/>
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








