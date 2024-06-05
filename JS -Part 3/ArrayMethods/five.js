let enames=["Rahul","Sonia","Priyanka","Modi"]

//create new array with upper case lettes- based on existing array

let new_enames=enames.map((ename)=>{
    return ename.toLocaleUpperCase()
})

console.log(new_enames)