import React, { Component } from 'react'

export default class ConditionalRenderDemo extends Component {    
    render() {

        const { isLoggedIn } = this.props;

        return isLoggedIn 
        ? <div>
            <h3>User is Logged In</h3>
            <br/>
            <div class="alert alert-warning" role="alert">Where user data is passed as prop in App.js.</div>
        </div> : <h3>
        User is not Logged In
        <br/>
        <div class="alert alert-warning" role="alert">Where user data is passed as prop in App.js.</div>
        </h3>
    }
}
