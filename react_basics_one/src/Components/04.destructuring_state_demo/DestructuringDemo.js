import React, { Component } from 'react'

export default class DestructuringDemo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            firstName : '',
            lastName: '',
            favLanguage: '',
            age: '',
        }
    }
    
    setUsername = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    setLastname = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    setFavlang = (event) => {
        this.setState({
            favLanguage: event.target.value
        })
    }

    setAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        const {firstName, lastName, favLanguage, age} = this.state
        return (
            <div>
                <h3>
                    First Name : {firstName}
                    <br/>
                    <br/>
                    Last Name : {lastName}
                    <br/>
                    <br/>
                    Fav Language : {favLanguage}
                    <br/>
                    <br/>
                    Age : {age}
                </h3>
                <br/><br/>
                <input type="text" onChange={(event)=>this.setUsername(event)} placeholder="First Name" className="form-control"/>
                <br/>
                <input type="text" onChange={(event)=>this.setLastname(event)} placeholder="Last Name" className="form-control"/>
                <br/>
                <input type="text" onChange={(event)=>this.setFavlang(event)} placeholder="Fav Language" className="form-control"/>
                <br/>
                <input type="number" onChange={(event)=>this.setAge(event)} placeholder="Age" className="form-control"/>
            </div>
        )
    }
}
