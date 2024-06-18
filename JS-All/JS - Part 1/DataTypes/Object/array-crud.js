//create array
let a=[10,20,30,40]

//read array
console.log(a)
//read array elements - using indexing 
console.log(a[0]) //10
console.log(a[1]) //20
console.log(a[2]) //30
console.log(a[3]) //40
console.log(a[4]) //undefined
/*While trying access array element using indexing - 
  indexing not available we wll get undefined.
*/
//update

a[0] = 101
a[1] = 102
console.log(a)

//delete 
//using array methods 
//delete -keywords

delete a  

a.pop()


console.log(a)