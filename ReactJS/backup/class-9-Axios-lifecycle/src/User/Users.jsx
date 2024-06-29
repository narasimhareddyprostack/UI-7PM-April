import React,{useState,useEffect} from 'react'
import  Axios  from 'axios';
let Users=()=>{
    let [users,setUsers]=useState([])

    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
        .catch(()=>{})
    });
    return <div className="container mt-4">
    <pre>Users:{JSON.stringify(users)}</pre> 
    <div className="row">
    
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
            users.length >0 ? <>
            {
                users.map((user)=>{
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

export default Users