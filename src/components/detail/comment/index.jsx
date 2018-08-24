

import React, { Component } from 'react'
import style from './index.scss'

class Comment extends Component {

    constructor(props){
        super(props)

        this.state = {
            areaval:'请输入评论'
        }
    }

    formaction = (e) => {
        // 阻止提交
        e.preventDefault()


    }

    onChangeTextarea = (e) => {
        let val = e.target.value

        this.setState({areaval:val})
    }

    render(){
        return(
            <div className={ style.commentbox }>
                <form onSubmit={ this.formaction }>
                    <textarea name="words" onChange={ this.onChangeTextarea } value={ this.state.areaval }></textarea>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Comment





