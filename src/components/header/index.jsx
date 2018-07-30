import React, {Component} from 'react'


class Header extends Component {

    headerFn = () => {
        this.props.headerFn()
    }

    render(){
        
        return (
            <div onClick={this.headerFn}>
                hello Header「」{this.props.res}
            </div>
        )
    }
}

export default Header


