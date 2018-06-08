import React, { Component } from 'react'
import EditModal from './EditModal'
import { Icon, Button } from 'semantic-ui-react'
import './ListItems.css'

export default class extends Component {

    deleteFunction = (id) => {
       this.props.deleteFunction(id)
    }

    render() {
        if (this.props.data === undefined) {
            return (
                <div><Icon loading name='spinner' /></div>
            )
        }
        else {
            return this.props.data.map((key) => {
                return <div className='listItem' key={key._id}>
                    <ul>
                        <li>{key.createToDo}
                        <Button className='button' size='mini' circular color='red' icon='delete' onClick={() => {
                            this.deleteFunction(key._id)
                        }}/>
                            <EditModal data={key} />
                        </li>
                    </ul>
                </div>
            })
        }
    }
}