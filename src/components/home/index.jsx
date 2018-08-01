

import React, { Component } from 'react'
import homeStyle from './index.scss'


class Home extends Component {

    render(){
        return (
            <div>
                <div  className={ homeStyle.home }>
                    <button><span>VIP</span></button>
                </div>
                <div className={ homeStyle.todo }>
                    <ul>
                        {
                            [
                                {
                                    title:'VIP-VIP-title-VIP',
                                    imgUrl:'/img/home/todos1.png'
                                },
                                {
                                    title:'VIP-VIP-title-VIP',
                                    imgUrl:'/img/home/todos1.png'
                                },
                                {
                                    title:'VIP-VIP-title-VIP',
                                    imgUrl:'/img/home/todos1.png'
                                },
                                {
                                    title:'VIP-VIP-title-VIP',
                                    imgUrl:'/img/home/todos1.png'
                                }
                            ].map((res, index) => 
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
            </div>
        )
    }
}

export default Home








