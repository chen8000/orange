
///////////   无状态组件    //////

// 占位组件
// 同比例撑起父元素
// 以便父元素内的其他元素进行定位而不乱版

import React from 'react'

import style from './index.scss'

const Placeholder = ( props ) => <img className={ style.placeholder } src={ props.url } alt=""/>

export default Placeholder


