import React,{useEffect} from "react"
let Users=()=>{

    useEffect(()=>{
        console.log("after return statement!")
        return ()=>{
            console.log("unmounting! time")
        }
    },[])


    return <div>
            <h1>User Data</h1>
            </div>
}
export default Users