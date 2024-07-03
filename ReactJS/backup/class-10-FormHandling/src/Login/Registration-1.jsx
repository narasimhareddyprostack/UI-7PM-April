import React, { Component } from 'react'


class Registration extends Component {
constructor(props){
    super(props)
    this.state={
       uname:"",
       uemail:"",
       umobile:""
      
    }
}
nameHandler=(event)=>{
    this.setState({uname:event.target.value})
}
emailHandler=(event)=>{
    this.setState({uemail:event.target.value})
}
mobileHandler=(event)=>{
    this.setState({umobile:event.target.value})
}

render() {
    return (
      <div className='container'>
      <pre>{JSON.stringify(this.state)}</pre>
      <div className="row">
        <div className="col-md-4">
        <h5>Registration Component</h5>
       
        <form >
            <div className='form-group'>
               {/*  <label >User Name:</label> */}
                <input type="text" placeholder='User Name' className='form-control' onChange={this.nameHandler} />
            </div>
            <div className='form-group'>
             {  /*  <label >Email Id:::::::</label> */}
                <input type="text" placeholder='Email Id' className='form-control' onChange={this.emailHandler}/>
            </div>
            <div className='form-group'>
                {/* <label >Mobile No:</label> */}
                <input type="text" placeholder="Mobile Number" className='form-control' onChange={this.mobileHandler} />
            </div>
           
            <input type="submit" value={"Registration"} />
        </form>
        </div>
      </div>
       
      </div>
    )
  }
}

export default Registration