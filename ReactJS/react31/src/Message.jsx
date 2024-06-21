import React from 'react'
class Message extends React.Component{
    msg="Hello"
    
    gmHandler= ()=>{
        //console.log("Test Case")
        this.msg = "Good Morining"
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler = ()=>{
        this.msg="Good Night"
        this.forceUpdate()
    }
    render(){
        return <div>
                <h1>Message</h1>
                <hr/>
                <h3>Message:{this.msg}</h3>
                        <button onClick={this.gmHandler}>GM</button>
                        <button onClick={this.gnHandler}>GN</button>
                </div>
    }

}

export default Message;