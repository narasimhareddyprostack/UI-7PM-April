import React from "react";
import Employee from "./Employee";
class User extends React.Component{
    user_Id = 101
    user_Name="Rahul"
    user_Details={
        loc:"Wayanad",
        email:"rahul@gmail.com"
    }
    render(){
        return <div>
                <h2>User Component</h2>  
                <hr />
                <Employee userId={this.user_Id} uName={this.user_Name} uDetails={this.user_Details}/>
              </div>
    }
}

export default User