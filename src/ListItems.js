import React, {Component} from 'react'
import { Divider } from 'semantic-ui-react';

export default class extends Component {
    render(){
console.log(this.props.data)
        if(this.props.data == undefined){
            return(
                <div>...loading</div>
            )
        }
        else{

            return this.props.data.map((key)=> {
                console.log(key)
                return <div key={key.id}>{key.createToDo}</div>
            })
        }
    }
}