import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    constructor(props){
        super(props)
        console.log("First construcot method")
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        console.log("third - componentDidmount")
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
            this.setState({users:resp.data})
        })
        .catch()
    }
    /* getUserData=()=>{
       
    } */
    render() {
        
        console.log("second -render")
      return <div className="container mt-4">
        <div className="row">
       {/*  <pre>{JSON.stringify(this.state.users)}</pre> */}
        <div className="col-md-6">

            <table className='table'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email Id:</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.users.length >0 ? <>
                {
                    this.state.users.map((user)=>{
                        return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                    })
                }
                </>:<></>

            }
            
            </tbody>
            </table>
        
        </div>
        </div>
      </div>
  }
}

export default Users