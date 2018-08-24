
import React, { Component } from 'react'
import style from './index.scss'

class Share extends Component {

    render(){
        return(
            <div className={ style.share }>

                {/* 点赞 */}
                <span className={ style.like }>
                    <i className="iconfont icon-dianzan"></i> 66
                </span>

                {/* 评论 */}
                <span className={ style.like }>
                    <i className="iconfont icon-pinglun"></i> 660
                </span>

                {/* <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-qq1193403easyiconnet"></use></svg> */}
                分享到：
                <a className={ style.weixin } href="">
                    <i className="iconfont icon-weixin"></i>
                </a>
                <a className={ style.qq } href="">
                    <i className="iconfont icon-qq"></i>
                </a>
                <a className={ style.weibo } href="">
                    <i className="iconfont icon-weibo"></i>
                </a>
                <a className={ style.qqkongjian } href="">
                    <i className="iconfont icon-qqkongjian"></i>
                </a>
            </div>
        )
    }
}

export default Share



