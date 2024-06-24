import React from "react";
class Message extends React.Component{
    //msg ="Hello"
    state = {
        msg:"Hello"
    }
    gmHandler=()=>{
            this.setState({msg:"Good Morning"})
    }
    gnHandler=()=>{
        this.setState({
            msg:"Good Night"
        })
    }
    render(){
        console.log("Render Method ")
        return <div>
                    <h1>Message Component</h1>
                    <h3>MEssage Value:{this.state.msg}</h3>
                    <button onClick={this.gmHandler}>GM</button>
                    <button onClick={this.gnHandler}>GA</button>
                </div>
    }
}
export default Message