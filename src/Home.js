import React, { Component } from 'react'
import User from './User'

export default class Home extends Component {
    state = {
        user: {
            createToDo: ''
        },
        users: [
            {
                createToDo: 'example'
            }
        ]
    }
    handleOnChange = (e) => {
        if (e.target.id === "toDoEntry")
            this.setState({
                toDoEntry: e.target.value
            })
    }
    handleOnClick = () => {
        this.setState((prev) => {
            const existingUsers = prev.users
            existingUsers.push({
                createToDo: prev.createToDo
            })
            return {
                users: existingUsers
            }
        })
    }
    renderList = () => {
        return this.state.user.map((users) => {
            return (
                <User key={0} createToDo={users.createToDo} />
            )
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <article>
                    <h1>What Do You Need To Do?</h1>
                    <div><label>words</label><input id="toDoEntry" onChange={this.handleOnChange} />
                        <button onClick={this.handleOnClick}>Add</button>
                    </div>
                </article>
                <article>
                    <h1>What Ya Gotta Do</h1>
                    <div>
                        {this.renderList}
                    </div>
                </article>
            </div>
        )
    }
}