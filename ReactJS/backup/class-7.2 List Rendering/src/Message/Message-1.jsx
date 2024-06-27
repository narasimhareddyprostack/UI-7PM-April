import React, { Component } from 'react'

class Message extends Component {
 state;
 constructor(props){
    super(props)
    this.state={
         message:"Hello"
    }
 }
 gmHandler=()=>{
    this.setState({
        message:"Good Morning"
    })
 }
 gaHandler=()=>{
    this.setState({
        message:"Good Afternoon"
    })
 }
 gnHandler=()=>{
    this.setState({
        message:"Good Night"
    })
 }

  render() {
    return <div>
                <h2>Message Component</h2>
                <h3>Message Value:{this.state.message}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
  }
}

export default Message