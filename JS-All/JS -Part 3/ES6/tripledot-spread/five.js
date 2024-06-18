let emp={
    id:101,
    name:"Rahul",
    sal:45000,
    email:'rahul@gmail.com',
}
let user={...emp}
console.log(user)
//merge object
let detais={
    email:'rahul@ibm.com',
    loc:'Wayanad'
}
let emp_Details={...emp,...detais}
console.log(emp_Details)
let emp_info={...emp,'avail':true}
console.log(emp_info)