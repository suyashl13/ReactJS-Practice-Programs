import React, { Component } from 'react'

export default class StateDemo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    
    incrementCounter() {
        this.setState(prevCount=>({
            count: prevCount.count + 1
        }));
    }

    decrementCounter() {
        this.setState(prevCount=>({
            count: prevCount.count - 1
        }));
    }

    resetCounter() {
        this.setState({
            count: 0
        });
    }


    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <br/>
                <input type="button" className="btn btn-outline-dark" onClick={()=> this.incrementCounter()} value="Increment"/><br/><br/>
                <input type="button" className="btn btn-outline-dark" onClick={()=> this.decrementCounter()} value="Decrement"/><br/><br/>
                <input type="button" className="btn btn-outline-dark" onClick={()=> this.resetCounter()} value="Reset"/><br/><br/>
            </div>
        )
    }
}
