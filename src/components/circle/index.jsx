
import React, { Component } from 'react'

import Search from './search'
import Article from './article'


class Circle extends Component {
    render(){
        return(
            <div>
                <Search />
                <Article />
            </div>
        )
    }
}

export default Circle



