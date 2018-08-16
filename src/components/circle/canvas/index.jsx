
import React, { Component } from 'react'
import style from './index.scss'

class Canvas extends Component{
    render(){
        return (
            <div className={ style.canvasBox }>
                <iframe title="circleCanvas" src="canvas/circleCanvas.html" className={ style.canvas } frameBorder="0"></iframe>
            </div>
        )
    }
}

export default Canvas



