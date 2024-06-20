function Message(){
    let eid=101
    let ename= "Rahul Gandhi"
    let loc = ["Wayanad","New Delhi","Bangalore"]
    let details={
        sal:45000,
        avail:true
    }
    return <div>
            <h2>Message Component</h2>
            <h3>Employee Id:{eid}</h3>
            <h3>Employee Name:{ename}</h3>
            <h3>Location:{loc[0]}</h3>
            <h3>Details:{JSON.stringify(details)}</h3>
            </div>
}

export default Message