import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import './User.css'
import { Icon, Button } from 'semantic-ui-react'

export default class User extends Component {
    static propTypes = {
        createToDo: ReactPropTypes.string,
    }
    render() {
        return (
            <div className="listItem">
                {this.props.createToDo}
                <Button  circular icon>
                <Icon size='small' circular color='white' name='eraser' />
                </Button>
            </div>
        )
    }
}

