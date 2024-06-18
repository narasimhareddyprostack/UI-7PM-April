let emp={
    'id':101,
    'name':'Rahul',
    'sal':450000
}
let emp_Str='{"id":101,"name":"Rahul","sal":450000}'

console.log(JSON.stringify(emp))
console.log(JSON.parse(emp_Str))