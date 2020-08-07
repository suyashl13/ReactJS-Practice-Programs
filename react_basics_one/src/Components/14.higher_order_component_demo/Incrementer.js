import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

class Incrementer extends Component {
    render() {
        const { incrementCounter, decrementCounter, count } = this.props;
        return (
            <div className="jumbotron">
                <h1> Count : {count}</h1>
                <br/><hr/>
                <button className="btn btn-outline-dark" onClick={incrementCounter}>Increment</button>
                <br/>
                <br/>
                <button className="btn btn-outline-dark" onClick={decrementCounter}>Decrement</button>
            </div>
        )
    }
}

export default HigherOrderComponent(Incrementer)