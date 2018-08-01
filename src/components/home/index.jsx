

import React, { Component } from 'react'
import homeStyle from './index.scss'


class Home extends Component {

    render(){
        return (
            <div>
                <div  className={ homeStyle.home }>
                    <button>VIP</button>
                </div>
                <div className={ homeStyle.home1 }>

                </div>
            </div>
        )
    }
}

export default Home








