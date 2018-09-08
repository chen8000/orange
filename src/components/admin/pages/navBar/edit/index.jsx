
import React, { Component } from 'react'
import style from './index.scss'

class Edit extends Component{

    goBack = () => {
        this.props.history.goBack()
    }

    render(){
        return (
            <div className={ style.edit }>
                <button onClick={ this.goBack } className={style.addBtn}>返回</button>
            </div>
        )
    }
}

export default Edit


