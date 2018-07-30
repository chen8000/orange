
import React, {Component} from 'react'
import headStyle from './index.scss'


class Header extends Component {

    

    render(){
        console.log(headStyle.header)
        return (
            <div className={headStyle.header}>
                dd
            </div>
        )
    }
}

export default Header


