import React, { Component } from 'react'

export default class StateFormDemo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            comment:""
        }
    }
    
    setUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    setComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    render() {
        return (
            <div>
                <br/>
                <h1>@{this.state.username}</h1>
                <h3>Says : {this.state.comment}</h3>
                <br/>
                <br/>
                <input type="text" placeholder="Username" className="form-control" onChange={(e)=>this.setUsername(e)}/>
                <br/>
                <input type="text" placeholder="Comment" className="form-control" onChange={(e)=>this.setComment(e)}/>
            </div>
        )
    }
}
