let numbers=[0,1,2,3,4,5,6,7,8,9,10]
//create new array with -even numbers

let new_even_numbers=[]

for( num of numbers){
    if(num %2 ==0){
        new_even_numbers.push(num)
    }
}
console.log(new_even_numbers)