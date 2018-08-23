
import React, { Component } from 'react'
import style from './index.scss'

class Detail extends Component {

    render(){
        return (
            <div>
                <div  className={ style.headerbar }>
                    {/* 背景图 */}
                    <img className={ style.bgImg } src= { `/img/detail/bg/item1.jpg` } alt=""/>

                    {/* info */}
                    <div className={ style.info }>
                        <h2>OPPO Find X兰博基尼版开箱图赏！超跑奢华质感，大写的牛！</h2>
                        <div className={ style.head }>
                            <div className={ style.headImg }>
                                <img src="/img/circle/article/todos/headImg.jpg" alt=""/>
                            </div>
                            <div className={ style.namebox }>
                                <h3>zhenghui.chen<i className="iconfont icon-dengji1"></i></h3>
                                <p>前端开发工程师</p>
                            </div>
                            <div className={ style.timesbox }>
                                <span>2018年 8月23日 18:35</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:'500px'}}></div>
            </div>
        )
    }
}

export default Detail


