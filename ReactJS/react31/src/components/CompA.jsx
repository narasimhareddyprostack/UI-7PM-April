import CompB from "./CompB"
function CompA(){
    let eid=101
    let ename="Rahul"
    return <div>
            <h2>Component A</h2>
            <hr/>
            <CompB emp_id={eid} emp_Name={ename}/>
           { /* <CompB prop1={"GM"} prop2={["A","B","C"]}/>  */}
            
           {/* <CompB  employee_id={eid} emp_Name={ename} msg={"GM"}/> */}
           {/* <CompB one={1} two={"Two"} three={[1,2,3]} four={{id:110}}/> */ }
          
            </div>
}

export default CompA