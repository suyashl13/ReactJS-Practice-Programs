import React, { Component } from 'react'

const HigherOrderComponent = (NewComponent) => {
    return class HigherComponent extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count: 0,
            }
        }
        
        incrementCounter = () => {
            this.setState(prevState => ({
                count : prevState.count + 1
            }))
        }

        decrementCounter = () => {
            this.setState(prevState => ({
                count : prevState.count - 1
            }))
        }

        render() {
            return (
                <div>
                    <NewComponent count={this.state.count} incrementCounter={this.incrementCounter} decrementCounter={this.decrementCounter} /> 
                </div>
            )
        }
    }   
}

export default HigherOrderComponent