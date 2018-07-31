
import React, {Component} from 'react'
import headStyle from './index.scss'


class Header extends Component {

    // 组件渲染完成后初始化状态
    componentDidMount(){
        this.props.headerNavBar({w:'60',l:'0'})
    }

    navBarActive = (event) => {

        // 获取节点的 width left
        let navBarWidth = event.target.clientWidth
        let navBarLeft = event.target.offsetLeft

        this.props.headerNavBar({w:navBarWidth, l:navBarLeft})

    }

    render(){
        let { res } = this.props
        
        return (
            <div className={ headStyle.header }>
                <div className={ headStyle.container }>
                    <div className={ headStyle.logo }>
                        <img src="/img/common/logo.png" alt=""/>
                        <img className={ headStyle.logo_O } src="/img/common/logo_O.png" alt=""/>
                        
                    </div>
                    <div className={ headStyle.login }>
                        {
                            ['登陆','注册']
                            .map((res, index) => <span key={ index } >{ res }</span>)
                        }
                    </div>
                    <ul>
                       <span style={{width:res.headerBar.w, left:res.headerBar.l}} className={ headStyle.navBarActive }></span>

                       {
                           ['首页','相册','视频','发表文章','新闻列表','阅读排行榜']
                           .map((res, index) => <li  onMouseOver={ this.navBarActive } key={ index } > { res } </li> )
                       } 
                       
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header


