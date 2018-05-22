import React, { Component } from 'react'
import User from './User'
import './Home.css'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

export default class Home extends Component {
    state = {
        users: [

        ]
    }

    handleOnChange = (e) => {
        if (e.target.id === "toDoEntry")
            this.setState({
                createToDo: e.target.value
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
        return this.state.users.map((user, i) => {
            return (
                <li key={i}><User createToDo={user.createToDo} /></li>
            )
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <header>
                    <h1>What Do You Need To Do?</h1>
                    <div><input id="toDoEntry" onChange={this.handleOnChange} />
                        <button onClick={this.handleOnClick}>Add</button>
                    </div>
                </header>
                <article className="listBody">
                    <h1 className="titleName">What Ya Gotta Do</h1>
                    <div className="renderedList">
                        <ul>
                            {this.renderList()}
                        </ul>
                    </div>
                    <Link to="/Contact">  <Icon color="black" name="mail" size="huge" /> </Link>
                </article>
            </div>
        )
    }
}