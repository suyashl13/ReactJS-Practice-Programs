import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosGetReqDemo extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
        }
    }
    
    componentDidMount(){
        axios.get('https://api.github.com/users')
        .then(response => {
           console.log(response.data);
           this.setState({posts: response.data})
        })
        .catch(e => console.log(e));
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                <center><h3>GitHub Users</h3></center>
                <br/>
                {
                    posts.length ?
                    posts.map(
                        (element) => <>{element.login}<br/></>
                    ) : null
                }
            </div>
        )
    }
}
