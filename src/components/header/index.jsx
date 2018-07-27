import React, {Component} from 'react'


class Header extends Component {

    headerFn = () => {
        console.log(this.props)
    }

    render(){
        
        return (
            <div onClick={this.headerFn}>
                hello Header
            </div>
        )
    }
}

export default Header


