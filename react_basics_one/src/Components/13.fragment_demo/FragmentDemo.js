import React, { Component } from 'react'

export default class FragmentDemo extends Component {
    render() {
        return (
            <React.Fragment>
                Hello, I am not embedded inside div tag.
                I am React.Fragment 
            </React.Fragment>
        )
    }
}
