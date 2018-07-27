import React, { Component } from 'react'

import ne from './news.scss'

class News extends Component {

    constructor(props){
        super(props)
        console.log(ne)
    }
    
    render(){
        return(
            <div className={ne.div}>news</div>
        )
    }
}

export default News