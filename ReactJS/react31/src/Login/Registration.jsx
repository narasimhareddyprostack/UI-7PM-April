import React, {useState} from 'react'
let Registration = ()=>{
let [user,setUser] = useState({
       uname:"",
       uemail:"",
       umobile:"",
       upassword:""
})
let updateHandler=(event)=>{
    setUser({...user,[event.target.name]:event.target.value})
}
let submitHandler =(event)=>{
    //event.preventDefault();
    console.log(user)
}
   
        return  <div className='container'>
          <pre>{JSON.stringify(user)}</pre>
          <div className="row">
            <div className="col-md-4">
            <h5>Registration Component</h5>
           
            <form onSubmit={submitHandler}>
                <div className='form-group'>
                   {/*  <label >User Name:</label> */}
                    <input type="text" name={"uname"} placeholder='User Name' className='form-control' onChange={updateHandler} />
                </div>
                <div className='form-group'>
                 {  /*  <label >Email Id:::::::</label> */}
                    <input type="text" name={"uemail"} placeholder='Email Id' className='form-control' onChange={updateHandler}/>
                </div>
                <div className='form-group'>
                    {/* <label >Mobile No:</label> */}
                    <input type="text" name={"umobile"} placeholder="Mobile Number" className='form-control' onChange={updateHandler} />
                </div>
                <div className='form-group'>
                    <input type="text" name={"upassword"} placeholder='Password' className='form-control' onChange={updateHandler}/>
                </div>
               
                <input type="submit" value={"Registration"} className='btn btn-warning' />
            </form>
            </div>
          </div>
           
          </div>
     
      
}
export default Registration