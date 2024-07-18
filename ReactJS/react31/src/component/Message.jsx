import React from 'react'
import {useDispatch} from 'react-redux';
import {gmAction,gnAction} from '../redux/message/message.action'
const Message = () => {
    let dispatch = useDispatch();

    let gmHandler = ()=>{
        //dispath an redux action
        dispatch(gmAction())
    }
  return (
    <div>
        <h1>Message Component</h1>
        <h2>Value:Hello</h2>
        <button onClick={gmHandler}>GM</button>
        <button onClick={()=>{
            dispatch(gnAction())
        }}>GA</button>
    </div>
  )
}

export default Message