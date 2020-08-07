import React, { Component } from 'react'

export default class FunctionalPropDemo extends Component {
    render() {
        return (
            <div>
                <h5>I was return from functional Prop {this.props.addOne(45)}.</h5>
            </div>
        )
    }
}
