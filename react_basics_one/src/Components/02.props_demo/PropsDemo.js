import React, { Component } from 'react'

export default class PropsDemo extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <div class="alert alert-warning" role="alert">
                    Where {this.props.name} is passed as prop in App.js.
                </div>
            </div>
        )
    }
}
