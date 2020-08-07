import React, { Component } from 'react'
import ChildComponentDemo from './ChildComponentDemo'

export default class ParentComponentDemo extends Component {
    render() {
        return (
            <div>
                <h1>Hello I am parent component.</h1>
                <br/>
                <ChildComponentDemo />
            </div>
        )
    }
}
