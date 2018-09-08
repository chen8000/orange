
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adminPagesTitle } from '../../../../../redux/actions'
import { thisPageInfo } from '../../../config'

class Banner extends Component {

    constructor(props){
        super(props)

        this.props.adminPagesTitle(thisPageInfo(this.props))
    }

    render(){

        return (
            <div>
                banner
            </div>
        )
    }
}

export default connect(
    state => ({ res: state.reducers }),
    { adminPagesTitle }
)(Banner)



