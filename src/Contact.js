import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render (){
        return(
            <div className="container2"> This is where the contact me stuff will go
                <form>
                   <h2>Name of List: <input/></h2>
                   <h2>What's Your Name:<input/></h2>
                   <h3><input type="radio" value="option1"/>Due By:<input/></h3>
                   <h3><input type="radio" value="option2"/>No Due Date</h3>
                </form>
            </div>
        )
    }
}