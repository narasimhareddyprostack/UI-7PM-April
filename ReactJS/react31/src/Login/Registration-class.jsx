import React, { Component } from 'react'


class Registration extends Component {
constructor(props){
    super(props)
    this.state={
       uname:"",
       uemail:"",
       umobile:"",
       upassword:""
    }
}

updateHandler = (event)=>{
    this.setState({ [event.target.name]:event.target.value })
}
submitHandler=(event)=>{
    //alert(JSON.stringify(this.state))
    event.preventDefault()
    console.log(this.state)
}


render() {
    return (
      <div className='container'>
      <pre>{JSON.stringify(this.state)}</pre>
      <div className="row">
        <div className="col-md-4">
        <h5>Registration Component</h5>
       
        <form onSubmit={this.submitHandler}>
            <div className='form-group'>
               {/*  <label >User Name:</label> */}
                <input type="text" name={"uname"} placeholder='User Name' className='form-control' onChange={this.updateHandler} />
            </div>
            <div className='form-group'>
             {  /*  <label >Email Id:::::::</label> */}
                <input type="text" name={"uemail"} placeholder='Email Id' className='form-control' onChange={this.updateHandler}/>
            </div>
            <div className='form-group'>
                {/* <label >Mobile No:</label> */}
                <input type="text" name={"umobile"} placeholder="Mobile Number" className='form-control' onChange={this.updateHandler} />
            </div>
            <div className='form-group'>
                <input type="text" name={"upassword"} placeholder='Password' className='form-control' onChange={this.updateHandler}/>
            </div>
            <input type="submit" value={"Registration"} className='btn btn-warning' />
        </form>
        </div>
      </div>
       
      </div>
    )
  }
}

export default Registration