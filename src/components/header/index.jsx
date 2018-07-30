
import React, {Component} from 'react'


class Header extends Component {

    headerBar = () => {
        this.props.test()
    }

    render(){
        
        return (
            <div onClick={this.headerBar}>
                hello Header「{this.props.res}」
            </div>
        )
    }
}

export default Header


