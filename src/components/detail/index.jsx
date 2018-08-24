
import React, { Component } from 'react'
import style from './index.scss'
import Comment from './comment'
import Share from './share'

class Detail extends Component {

    render(){
        return (
            <div className={ style.bgColor }>
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
                                <p>语言是表达思想的东西</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ style.content }>
                        <p className={ style.times }>发表时间：2018年8月23日 18:20</p>
                        {/* 文字 */}
                        {/* 照片  (照片描述)*/}
                        {/* 视频 （视频描述）*/}

                        {/* 文字 */}
                        <p className={ style.text }>
                            前后倒换一下轮胎，使用寿命勉强也能达到5、6万公里；我的就从来没倒换过，所以快报废了；如果勉强用怕有危险，所以还是换新吧。
                        </p>

                        {/* 照片+描述 */}
                        <div className={ style.imgGroup }>
                            <img src="/img/detail/content/item1.jpg" alt=""/>
                            <span>
                                前后倒换一下轮胎，使用寿命勉强也能达到5、6万公里；我的就从来没倒换过，所以快报废了；如果勉强用怕有危险，所以还是换新吧。
                            </span>
                        </div>
                        {/* 照片 */}
                        <div className={ style.imgGroup }>
                            <img src="/img/detail/content/item1.jpg" alt=""/>
                        </div>
                        {/* 视频+描述 */}
                        <div className={ style.videoGroup }>
                            <video src="/img/detail/content/video/item1.mp4" controls></video>
                            <span>
                                前后倒换一下轮胎，使用寿命勉强也能达到5、6万公里；我的就从来没倒换过，所以快报废了；如果勉强用怕有危险，所以还是换新吧。
                            </span>
                        </div>
                        {/* 视频 */}
                        <div className={ style.videoGroup }>
                            <video src="/img/detail/content/video/item1.mp4" controls></video>
                        </div>

                        {/* 分享组件 */}
                        <Share />

                        {/* 评论组件 */}
                        <Comment />
                    </div>
                    
            </div>
        )
    }
}

export default Detail


