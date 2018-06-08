import React, { Component } from 'react'
import './Home.css'
import ListItems from './ListItems'


export default class Home extends Component {

    state = {
        redirected: false
    }

    getInfo = async () => {
        try {
            const infoResponse = await fetch('http://localhost:3001/list')
            const info = await infoResponse.json()
            this.setState({ info })
        } catch (error) {
            this.setState({ errorMessage: error })
        }
    }


    handleOnChange = (e) => {
        if (e.target.id === "toDoEntry")
            this.setState({
                createToDo: e.target.value
            })
    }

    handleOnClick = async () => {
        const listData = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        try {
            const postList = await fetch('http://localhost:3001/list', listData)
            const list = await postList.json()
            this.renderList()
            this.setState({

            })
            console.log("this is the list", list)
        } catch (error) {
            console.log("error", error)
        }
    }

    deleteTheItem = async (id) => {
        console.log(id)
        const idObj = { id: id }
        console.log(idObj)
        const deleteData = {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idObj)
        }
        const deleteItems = await fetch("http://localhost:3001/list", deleteData)
        await deleteItems
        console.log(this.state)
        window.location.reload()
    }

    renderList = async () => {
        const getList = await fetch("http://localhost:3001/list")
        const listItems = await getList.json()
        console.log("listItems", listItems)
        this.setState({
            users: listItems
        })
    }


    componentDidMount() {
        this.renderList()
    }

    render() {
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
                            <ListItems data={this.state.users} deleteFunction={this.deleteTheItem} />
                        </ul>
                    </div>
                </article>
            </div>
        )
    }
}