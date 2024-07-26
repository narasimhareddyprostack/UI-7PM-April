import React,{useState,useMemo} from 'react'

const MemoEx = () => {
    let [counter,setCounter]=useState(1)
    let [number,setNumber]=useState(3)
    //let factResult= fact(number);
    let factResult= useMemo(()=>{ return fact(number)},[number]) ;
  return <div>
            <h3>MemoEx</h3>
            <hr />

          <button onClick={()=>{ setCounter(counter-1)}}>DECR</button>
                        {counter}
          <button onClick={()=>{setCounter(counter+1)}}>INCR</button>
          <br />
          <button onClick={()=>{setNumber(number+1)}}> Factorial of {number} is: {factResult} </button>
        </div>
}
let fact = (num)=>{
    console.log("Inside factorial function!")
    let result = 1;
        for(let i=num; i>=1; i--){
            result  = result * i
        }
    return result ;
}

export default MemoEx