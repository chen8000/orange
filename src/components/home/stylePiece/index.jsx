
import React, { Component } from 'react'
import style from './index.scss'

class StylePiece extends Component{

    render(){
        return(
            <div className={ style.stylePiece }>
                <div className={ style.bg }></div>
                <div className={ style.piece }>
                    <div className={ style.imgbox }>
                        <img src="/img/home/stylePiece/left.jpg" alt=""/>
                    </div>
                    <div className={ style.text }>
                        <h2>标题</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere sed aliquam! Eius voluptatem ut fugiat a saepe. Nam numquam inventore tempore suscipit reprehenderit accusamus labore pariatur quia error vitae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque quisquam, assumenda laudantium natus placeat minima voluptatum exercitationem eaque nulla, maiores quas, sequi repudiandae quis! Blanditiis ab nisi consectetur tempore.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StylePiece




