
import React, {Component} from 'react'
import headStyle from './index.scss'


class Header extends Component {

    // 组件渲染完成后初始化状态
    componentDidMount(){

        // 初始化动画位置
        this.props.headerNavBar({w:'60px',l:'0px'})

        // 初始化导航样式状态
        this.props.windowScroll({ scroll:true })
    }

    navBarActive = (event) => {

        // 获取节点的 width left
        let navBarWidth = event.target.clientWidth
        let navBarLeft = event.target.offsetLeft

        this.props.headerNavBar({w:`${navBarWidth}px`, l:`${navBarLeft}px`})

    }

    

    render(){
        let { result } = this.props
        
        return (
            <div className={
                [
                    headStyle.header, 
                    result.scroll.type ? headStyle.headerFixed : null
                ].join(' ')
            }>
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
                       <span style={{width:result.headerBar.w, left:result.headerBar.l}} className={ headStyle.navBarActive }></span>

                       {
                           ['首页','相册','视频','文章','了解我们']
                           .map((res, index) => <li onMouseOver={ this.navBarActive } key={ index } > { res } </li> )
                       } 
                       
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header


