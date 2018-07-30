
import React, {Component} from 'react'
import headStyle from './index.scss'


class Header extends Component {

    render(){
        
        return (
            <div className={ headStyle.header }>
                <div className={ headStyle.container }>
                    <div className={ headStyle.logo }>
                        <img src="/img/common/logo.png" alt=""/>
                    </div>
                    <div className={ headStyle.login }>
                        {
                            ['登陆','注册'].map((res, index) => <a key={index} href='javascript:void(0);'>{res}</a>)
                        }
                    </div>
                    <ul>
                       {
                           ['首页','相册','视频','发表文章','新闻列表','阅读排行榜']
                           .map((res, index) => <li key={ index }>{res}</li> )
                       } 
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header


