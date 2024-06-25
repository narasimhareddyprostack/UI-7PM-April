import React,{useState} from 'react'
let Message = ()=>{
         
   let [message,setMessage]=useState("Hello")

   let updateHanlder = (value)=>{
      setMessage(value)
   }

   return <div>
         <h2>Message Component</h2>
         <h2>Message Value:{message}</h2>
         <button onClick={updateHanlder.bind(null,"Good Monrining")}>GM</button>
         <button onClick={updateHanlder.bind(null,"Good Afternoon")}>GA</button>
         <button onClick={updateHanlder.bind(null,"Good Evening")}>GE</button>
         <button onClick={()=>{
            setMessage("Good Night")
         }}>GN</button>
         
      </div>
}

export default Message