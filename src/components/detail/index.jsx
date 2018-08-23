
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
                                <p>语言是表达思想的东西</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 内容 */}
                <div className={ style.content }>
                    <p className={ style.times }>发表时间：2018年8月23日 18:20</p>
                    {/* 文字 */}
                    {/* 照片  (照片描述)*/}
                    {/* 视频 （视频描述）*/}

                    {/* 文字 */}
                    <p className={ style.text }>
                        随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                        随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                        随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                        自己的第一辆车，除了傻开也没什么使用经验；现在已经4.4万公里；轮胎有点偏磨，而且原车轮胎基本报废，去了2家4儿子，做了四轮定位，都说没问题；咨询了一些朋友，马牌轮胎寿命基本也就6万公里左右，如果按时（每1万公里倒换一次）
                        前后倒换一下轮胎，使用寿命勉强也能达到5、6万公里；我的就从来没倒换过，所以快报废了；如果勉强用怕有危险，所以还是换新吧。
                    </p>

                    {/* 照片+描述 */}
                    <div className={ style.imgGroup }>
                        <img src="/img/detail/content/item1.jpg" alt=""/>
                        <span>
                            随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                            随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                            随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                            自己的第一辆车，除了傻开也没什么使用经验；现在已经4.4万公里；轮胎有点偏磨，而且原车轮胎基本报废，去了2家4儿子，做了四轮定位，都说没问题；咨询了一些朋友，马牌轮胎寿命基本也就6万公里左右，如果按时（每1万公里倒换一次）
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
                            随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                            随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                            随着国内汽车的保有量越来越大，很多人都不再满足原厂的设定，想去改装一下爱车。不过呢，改装车可不仅仅是贴一下拉花，装饰一下内饰那么简单，而是一个系统的工程。将不同的改装件组合到车身上，经过调校之后，才会获得完美的效果。
                            自己的第一辆车，除了傻开也没什么使用经验；现在已经4.4万公里；轮胎有点偏磨，而且原车轮胎基本报废，去了2家4儿子，做了四轮定位，都说没问题；咨询了一些朋友，马牌轮胎寿命基本也就6万公里左右，如果按时（每1万公里倒换一次）
                            前后倒换一下轮胎，使用寿命勉强也能达到5、6万公里；我的就从来没倒换过，所以快报废了；如果勉强用怕有危险，所以还是换新吧。
                        </span>
                    </div>
                    {/* 视频 */}
                    <div className={ style.videoGroup }>
                        <video src="/img/detail/content/video/item1.mp4" controls></video>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail


