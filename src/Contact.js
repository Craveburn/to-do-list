import React, { Component } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Icon, Button, Checkbox, Form } from 'semantic-ui-react'

export default class Contact extends Component {

    state = {
        contactInfo: []
    }
    handleOnClick = () => {
        this.setState((prev) => {
            const existingUsers = prev.users
            existingUsers.push({
                createToDo: prev.createToDo
            })
            return {
                contactInfo: existingUsers
            }
        })
    }


    render() {
        return (
            <div className="container2"> Send It Boi
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Put Your Name Here' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <Link to="/">  <Icon color="black" name="home" size="big" /> </Link>
            </div>
        )
    }
}