let Employee = (props)=>{
    return <div>
            <h3>Employee Component</h3>
            <pre>{JSON.stringify(props)}</pre>
            <h2>Employee Name:{props.uName}</h2>
            <h3>Employee Email:{props.uDetails.email}</h3>
            </div>
}

export default Employee