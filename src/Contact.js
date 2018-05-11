import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render (){
        return(
            <div className="container2"> This is where the contact me stuff will go
                <form>
                    <input className="textBody" type="text"/>
                </form>
            </div>
        )
    }
}