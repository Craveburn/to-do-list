import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import './Home.css'
import ListItems from './ListItems'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'


export default class Home extends Component {

    state = {

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
        // this.setState((prev) => {
        //     const existingUsers = prev.users
        //     existingUsers.push({
        //         createToDo: prev.createToDo
        //     })
        // })
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
        // return {
        //     users: existingUsers
        // }
    }

    mapList = () => {
        if(!this.state.users){
            return <div> ...Loading</div>
        }else{
            const theUsers = this.state.users
            console.log("mapList", theUsers.users)
            return theUsers.map((key) => {
            return <li key={key.id} >{key.createToDo}</li>
       })
        }
    }


    renderList = async () => {
        const getList = await fetch("http://localhost:3001/list")
        const listItems = await getList.json()
        console.log("listItems", listItems)
        this.setState({
            users: listItems
        })
        // return listItems.map((user, i) => {
        //     return (
        //         <li key={i}><User createToDo={user.createToDo} /></li>
        //     )
        // })
    }

    componentDidMount() {
        this.renderList()
    }

    render() {
        console.log(this.state.users)

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
                            <ListItems data={this.state.users}/>
                        </ul>
                    </div>

                </article>
                <div className="icon">
                    <Link to="/Contact">  <Icon color="black" name="mail" size="big" /> </Link>
                </div>
            </div>
        )
    }
}