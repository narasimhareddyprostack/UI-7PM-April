import React, { Component } from 'react'

class Employee extends Component {
  render() {
  return <div>
            <h2>Employee Componet</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee Id:{this.props.userId}</h3>
            <h3>Employee Name:{this.props.uName}</h3>
            <h3>Employee Email:{this.props.uDetails.email}</h3>
        </div>
  }
}

export default Employee