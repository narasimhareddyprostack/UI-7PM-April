import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../../redux/counter/counter.action'
const Counter = () => {
    let dispatch = useDispatch()
    let counter=useSelector((state)=>{
        return state.counter;
    })
  return (
    <div>
        
    <h2>Counter Comonent</h2>
    <pre>{JSON.stringify(counter)}</pre>
    <button onClick={()=>{dispatch(decrAction())}}>DECR</button>
        Counter Value:{counter.counter}
    <button onClick={()=>{dispatch(incrAction())}}>INCR</button>
    </div>
  )
}

export default Counter