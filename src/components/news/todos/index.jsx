
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
                    times:'刚刚',
                    layout:'max'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'max'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                },
                {
                    imgUrl:'/img/album/todos/item01.jpg',
                    title:'OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！',
                    headImg:'/img/album/todos/item01.jpg',
                    userName:'zhanghui.chen',
                    times:'刚刚',
                    layout:'min'
                }
            ]
        }
        
    }

    // 将要插入数据
    componentWillMount(){
        let [ ...newtodos ] = this.state.todos
        let max = [] // 放大盒子
        let min = [] // 放小盒子
        let todos = [] // 放经过筛选和排版后的盒子
        let reg = /[04]$/ // 匹配末尾是 0 或 4 

        // 把大盒子和小盒子分开放两个数组
        for(let i = 0; i< newtodos.length; i++){
            if(newtodos[i].layout === 'max'){
                max.push(newtodos[i]) //max
            }else{
                min.push(newtodos[i]) //min  
            }
        }
        
        // 正则验证数组下表末尾为 0 或 4 时 新数组里放大盒子
        for(let i = 0; i< newtodos.length; i++){
            if(reg.test(i)){
                if(max[0]){
                    todos.push(max[0])
                    max.splice(0, 1)
                }
                
            }else{
                if(min[0]){
                    todos.push(min[0])
                    min.splice(0, 1)
                }
            }
            
        }

        // 在上一步骤可能有某个数组里还有剩下的元素没有被筛选完，
        // 在这里统一放到新数组的末尾
        if( min.length === 0 && max.length !== 0 ){
            let [ ...m ] = max
            max = [ ]
            todos = todos.concat( m )
        }else if( max.length === 0 && min.length !== 0 ){
            let [ ...m ] = min
            min = [ ]
            todos = todos.concat( m )
        }
        
        this.setState({ todos })
    }
    
    render(){
        return (
            <div className={ style.container }>
                <div className={ style.todos }>
                    <h2 className={ style.title }>最新</h2>
                    {
                        this.state.todos.map((res, i) => 
                            <div key={ i } className={ res.layout === 'max' ? style.itemMax : style.itemMin }>
                                <NavLink to="/news/detail" className={ style.layout }>
                                    <div className={ style.focusImgbox }>
                                        <Placeholder url={`/img/album/todos/placeholder_${ res.layout === 'max' ? 'max' : 'min' }.png`}/>
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
                                            <span className={ style.times }> <i className="iconfont icon-shijian1"></i> { res.times }</span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Todos




