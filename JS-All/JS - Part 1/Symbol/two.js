let eid1=Symbol('uid')

let eid2=Symbol('uid')

console.log(eid1 ===eid2)  //false
console.log("hi" =="hi")  //true
console.log(10 === 10)  //true


let emp = {
    'eid':101,
    'eid':201,
    [eid1]:5001,
    [eid1]:6001

}


console.log("Employee Id", emp.eid)  //101 - Program1

console.log("User Id",emp[eid2]) //5001 - Program 2

for(property in emp){
    console.log(property)
}