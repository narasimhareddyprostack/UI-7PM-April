let emp={
    'id':101,
    'name':'Rahul',
    'sal':45000,
    'loc':"Bangalore"
}
//print emp object values
console.log(emp.id)


for(prop in emp){
    console.log(emp[prop])
}