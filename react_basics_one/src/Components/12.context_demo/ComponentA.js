import React, { Component } from 'react'
import { UserConsumer } from './UserContextDemo'

export default class ComponentA extends Component {
    render() {
        return (
            <div>
               <UserConsumer>
                   {
                       (value) => <>
                       <h2>Hi, {value} </h2>
                        <br/>
                        <div class="alert alert-warning" role="alert">
                            Here {value} is passed in context i.e UserConsumer
                        </div>
                       </>
                   }                   
               </UserConsumer>
               <br/>
            </div>
        )
    }
}