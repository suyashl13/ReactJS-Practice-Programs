import React, { Component } from 'react'
import ForwardInputRef from './ForwardInputRef';

export default class InputRefDemo extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    
    componentDidMount(){
        // this.inputRef.current.focus()
        console.log("Component Mounted !!")
    }

    componentDidUpdate(){
        console.log(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Input Ref Demo" className="form-control" ref={this.inputRef}/>
                <br/>
                <ForwardInputRef ref={this.inputRef}/>
                <br/>
                <button onClick={()=>alert(this.inputRef.current.value)} className="btn btn-outline-dark">Prompt</button>
            </div>
        )
    }
}
