
import React, { Component } from 'react'
import style from './index.scss'

class Add extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    render(){
        return(
            <div className={ style.add }>
                <button onClick={this.goBack} className={ style.addBtn }>返回</button>
            </div>
        )
    }
}

export default Add


