
import React, { Component } from 'react'
import style from './index.scss'

class Detail extends Component {

    constructor(props){
        super(props)
        
        this.state = {

            // 随机显示图片
            bg: Math.floor ( Math.random ( ) * 11 + 1)
        }
    }

    render(){
        
        return (
            <div>
                <div  className={ style.bg }>
                    <img src= { `/img/detail/bg/item${this.state.bg}.jpg` } alt=""/>
                </div>
            </div>
        )
    }
}

export default Detail


