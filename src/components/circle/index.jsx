
import React, { Component } from 'react'
import style from './index.scss';


class Circle extends Component {

    

    render(){
        return(
            <div>
                <canvas ref={ cvs => this.canvas = cvs } className={ style.canvas } ></canvas>
            </div>
        )
    }
}

export default Circle



