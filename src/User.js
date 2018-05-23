import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import './User.css'

export default class User extends Component{
    static propTypes = {
        createToDo: ReactPropTypes.string,
    }
    render() {
        return(
            <div className="listItem">
                {this.props.createToDo}
            </div>
        )
    }
}

