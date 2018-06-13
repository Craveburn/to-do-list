import React, { Component } from 'react'
import { Button, Input, Modal, Icon } from 'semantic-ui-react'

export default class extends Component {
    state = {
        modalOpen: false
    }

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
        this.props.reRender()
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => {
        this.editTheItem()
        this.setState({ modalOpen: false })
    }

    render() {
        console.log(this.props.data)
        return (
            <Modal
                trigger={<Button onClick={this.handleOpen} color='blue' size='mini' icon='edit' circular inverted/>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='mini'>
                <Modal.Content>
                    <Input focus defaultValue={this.props.data.createToDo} onChange={(e) => {
                        this.setState({
                            createToDo: e.target.value,
                            _id: this.props.data._id
                        })
                    }} />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Change That Item
          </Button>
                </Modal.Actions>
            </Modal>

        )
    }
}