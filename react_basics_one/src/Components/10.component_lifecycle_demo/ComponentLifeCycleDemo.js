import React, { Component } from 'react'

export default class ComponentLifeCycleDemo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            name : "Suyash"
        }
        console.log("Lifecycle a constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps called from A")
        return null
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate from A");
        return true;
    }


    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate from A");
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount from A");
    }

    changeState = () => {
        // setInterval(()=>{
        //     this.setState({
        //     name:'Codevolution'
        // });
        // },1000)
        this.setState({
            name:'Codevolution'
        });
    }

    render() {
        console.log("Render called")
        return (
            <div>
                <h4>{this.state.name}</h4>
                <br/>
                <button className="btn btn-outline-dark" onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}