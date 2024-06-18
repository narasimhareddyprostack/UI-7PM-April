//Undefined vs error 

let enames=['Rahul','Sonia','Priyanka','Modi']
//index       0       1         2        3 

console.log(enames[0]) //Rahul
console.log(enames[10]) //undefined

let emp={
    'id':101,
    'name':'Rahul',
    'sal':45000,
    'get_Details':function(){
        console.log("Getting info")
    }
}

console.log(emp.id) //101
console.log(emp.name) //Rahul
console.log(emp.loc)  //Undefined
emp.get_Details()
emp.get_Salary()  //Error

