function CompB(props){

    return <div>
            <h2>Component B</h2>
            <h3>{JSON.stringify(props)}</h3>
            <h2>Employee Id:  {props.emp_id}</h2>
            <h2>Employee Name:  {props.emp_Name}</h2>
            </div>
}

export default CompB