import React, { useEffect } from 'react'
import {userAction} from '../../redux/User/user.action'
import {useDispatch,useSelector} from 'react-redux'
const Users = () => {
  let dispatch = useDispatch();
  let  users=useSelector((state)=>{
    return state;
  })
  useEffect(()=>{
    dispatch(userAction())
  },[]);
  
  return (
    <div>
    <h1>User Components</h1>
    <pre>{JSON.stringify(users)}</pre>
    </div>
  )
}

export default Users