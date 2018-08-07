

// 占位组件
// 同比例撑起父元素
// 以便父元素内的其他元素进行定位而不乱版

import React, { Component } from 'react'

import style from './index.scss'

class Placeholder extends Component{

    render(){
        return <img className={ style.placeholder } src={ this.props.url } alt=""/>
    }
}

export default Placeholder


