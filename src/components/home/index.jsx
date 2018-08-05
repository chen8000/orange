

import React, { Component } from 'react'
import homeStyle from './index.scss'


class Home extends Component {

    render(){
        return (
            <div>
                <div  className={ homeStyle.home }>
                    <img src="/img/home/banner.jpg" alt=""/>
                    <button><span>VIP</span></button>
                </div>
                <div className={ homeStyle.todo }>
                    <ul>
                        {
                            [
                                {
                                    title:'晚霞',
                                    imgUrl:'/img/home/todos1.jpg'
                                },
                                {
                                    title:'枫叶🍁',
                                    imgUrl:'/img/home/todos2.jpg'
                                },
                                {
                                    title:'鸟巢',
                                    imgUrl:'/img/home/todos3.jpg'
                                },
                                {
                                    title:'故宫',
                                    imgUrl:'/img/home/todos4.jpg'
                                },
                                {
                                    title:'航空工业',
                                    imgUrl:'/img/home/todos5.jpg'
                                },
                                {
                                    title:'SOHO',
                                    imgUrl:'/img/home/todos6.jpg'
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








