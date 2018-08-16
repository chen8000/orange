
import React, { Component } from 'react'
import style from './index.scss'
import { addClass, removeClass } from '../../../module/tools'

import SwiperComponent from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'
import './index.css'

class Swiper extends Component{

    constructor(props){
        super(props)

        this.state = {
            todos:[
                {
                    imgUrl:'/img/album/swiper/item01.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/album/swiper/item02.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/album/swiper/item03.jpg',
                    title:'标题',
                    sort:'分类'
                },
                {
                    imgUrl:'/img/album/swiper/item04.jpg',
                    title:'标题',
                    sort:'分类'
                }
            ]
        }
    }

    componentDidMount(){
        
        // swiper 
        this.swiper = new SwiperComponent(this.containerId, {
            loop:true, 
            grabCursor: true,  /* 抓住小手 */
            autoplay:{
                delay:3000,
            },

            navigation: {
                nextEl: this.nextId,
                prevEl: this.prevId,
            },
            pagination: {
                el: this.paginationId,
                dynamicBullets: true,
            },
            on:{
                init: function(){
                    // 增加一个class 动态文字
                    addClass(this.slides[0], style.titleShow);
                },
                transitionStart : function(){
                    for(let i=0;i<this.slides.length;i++){
                        // 移除所有 动态文字的 class
                        removeClass(this.slides[i], style.titleShow);
                    }
                },
                transitionEnd : function(){
                    // 给当前的div添加动态class 
                    addClass(this.slides[this.activeIndex], style.titleShow);
                },
            }
        });
    }

    // 鼠标移入 停止轮播
    stopAutoPlay = () => {
        this.swiper.autoplay.stop();
    }

    // 鼠标移出 恢复轮播
    startAutoPlay = () => {
        this.swiper.autoplay.start();
    }

    render(){
        return(
            <div className="swiper-container" 
                    onMouseEnter={ this.stopAutoPlay } 
                    onMouseLeave={ this.startAutoPlay } 
                    ref={ con => this.containerId = con }>

                {/* 内容 */}
                <div className="swiper-wrapper">
                    {
                        this.state.todos.map((res, i) => 
                            <div className="swiper-slide" key={ i }>
                                <img className={ style.imgObj } src={ res.imgUrl } alt=""/>
                                <div className={ style.textBox }>
                                    <h1 className={ style.title }> { res.title }</h1>
                                    <p className={ style.sort }>
                                        { res.sort } 
                                        <i className='iconfont icon-fenlei'></i> 
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    
                    
                </div>

                {/* 左右切换箭头 */}
                <div className="swiper-button-next" ref={ next => this.nextId = next }>
                    <i className="iconfont icon-jiantou-copy-copy"></i>
                </div>
                <div className="swiper-button-prev" ref={ prev => this.prevId = prev }>
                    <i className="iconfont icon-jiantou-copy-copy"></i>
                </div>

                {/* 下面的小点点 */}
                <div className="swiper-pagination" ref={ pagi => this.paginationId = pagi }></div>
            </div>
        )
    }
}

export default Swiper




