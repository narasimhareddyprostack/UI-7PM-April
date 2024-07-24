import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {gmAction,geAction,gnAction} from '../../redux/message/message.action'
const Message = () => {
    let dispatch = useDispatch();
    let message=useSelector((state)=>{
        return state.message;
    })

    let gmHandler = ()=>{
        dispatch(gmAction())
    }
    let gnHandler = ()=>{
        dispatch(gnAction())
    }
  return (
    <div>
    <h1>Message Component</h1>
    <pre>{JSON.stringify(message)}</pre>
    <h4>Value:{message.msg}</h4>
    <button onClick={gmHandler}>GM</button>
    <button onClick={()=>{
        dispatch(geAction())
    }}>GE</button>
    <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message