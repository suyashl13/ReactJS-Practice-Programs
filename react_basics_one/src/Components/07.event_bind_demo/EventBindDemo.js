import React, { Component } from 'react'

class EventBindDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello:'Hello'
        };
    }
    
    clickHandler(){
        this.setState({
            hello:'Goodbye'
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.hello}</h2>
                <br/>
                <button className="btn btn-outline-dark" onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBindDemo