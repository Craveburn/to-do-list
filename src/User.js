import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'

export default class User extends Component{
    static propTypes = {
        createToDo: ReactPropTypes.string
    }
    render() {
        return(
            <div>
                {this.props.createToDo}
            </div>
        )
    }
}

