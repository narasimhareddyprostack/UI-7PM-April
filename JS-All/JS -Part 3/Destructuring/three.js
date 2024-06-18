let state={
    emp:{
        "eid":101,
        "ename":'Rahul',
        'email':"rahul@gmail.com"
    },
    product:{
        p_Name:"Samsung Galaxy"
    },
    count:100,
    users:[]
}
/* let salary = 25000
module.exports = {salary,state}
//export {state,salary} */
//print employee name

//console.log(state.emp.ename)
let {emp}  = state
let {ename}  = emp
console.log(ename)