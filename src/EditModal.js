import React, { Component } from 'react'
import { Button, Input, Modal } from 'semantic-ui-react'

export default class extends Component {
    editTheItem = async (id) => {
        const editData = {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        await fetch("http://localhost:3001/list", editData)
        console.log(this.state)
        window.location.reload()
    }

    render() {
        console.log(this.props.data)
        return (
            <Modal size='mini' trigger={<Button color='blue' size='mini' circular icon='edit' />} closeIcon>
                <Modal.Header>Edit That Item Boi</Modal.Header>
                <Modal.Content >
                    <Input focus defaultValue={this.props.data.createToDo} onChange={(e) => {
                        this.setState({
                            createToDo: e.target.value,
                            _id: this.props.data._id
                        })
                    }} /> <Button icon='thumbs up' onClick={() => {
                        this.editTheItem()
                    }} />
                </Modal.Content>
            </Modal >
        )
    }
}