import React, { Component } from 'react'
import { Icon, Button } from 'semantic-ui-react'
import './ListItems.css'

export default class extends Component {

    deleteFunction = (id) => {
        console.log('delete button hit', id)
       this.props.deleteFunction(id)
    }

    render() {
        console.log(this.props.data)
        if (this.props.data === undefined) {
            return (
                <div><Icon loading name='spinner' /></div>
            )
        }
        else {
            return this.props.data.map((key) => {
                console.log(key._id)
                return <div className='listItem' key={key.id}>
                    <ul>
                        <li>{key.createToDo}
                        <Button className='button' size='mini' circular color='red' icon='delete' onClick={() => {
                            this.deleteFunction(key._id)
                        }}/>

                            <Button circular icon='edit' />
                        </li>
                    </ul>
                </div>
            })
        }
    }
}