import React from 'react'

let Counter = ()=>{
    let [st,xyz]=React.useState(1)
    return <div>
                <h2>Counter -component Example</h2>
                <h3>Counter:::::-{st}</h3>
                <button onClick={()=>{xyz(st +1)}}>INCR</button>
                <button onClick={()=>{xyz(st -1)}}>DECR</button>
            </div>
}
export default Counter