//merge arrays

let a=[10,20,30,40,50]
let b=[30,40,50,60]


let c=[...a,...b]

console.log(c)//[10,20,30,40,50,30,40,50,60] // array allowed duplicates
//extending array elements
let enames = ['rahul','sonia','priya','modi']
let new_names=[...enames,"amith","DK Shiva","Yogi"]
console.log(new_names)