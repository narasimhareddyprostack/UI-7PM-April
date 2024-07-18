import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props){
        super(props)
        console.log("Constructor Method - 1")
    }
  getUserData=()=>{
    console.log("Test Case 123")
   

  }

  componentDidMount(){
    console.log("Life Cycle Method - 3")
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        console.log(resp.data)
    })
    .catch()
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){
    console.log("Unmountintg user component")
  }
  render() {
    console.log("Render method execute....2")
    return (
      <div>
      <h1>Users Data</h1>
      <button onClick={this.getUserData}>User Data</button>
      </div>
    )
  }
}

export default Users