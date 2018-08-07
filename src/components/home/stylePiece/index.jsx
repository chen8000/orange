
import React, { Component } from 'react'
import style from './index.scss'

class StylePiece extends Component{

    render(){
        return(
            <div className={ style.stylePiece }>
                <div className={ style.bg }></div>
                <div className={ style.content }>
                    {/* left图片 */}
                    <div className={ style.leftImg }>

                    </div>

                    {/* right 图片 */}
                    <div className={ style.rightImg }>

                    </div>
                </div>
            </div>
        )
    }
}

export default StylePiece




