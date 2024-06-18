//WAP - given number is even or not 
//read data from user 
let input = require('prompt-sync')()


let num= parseInt(input("Enter Number:"))


num %2 ===0 ? console.log("Even"):console.log("Odd")

/* if(num %2 ==0){
    console.log("Given Number is Even Number")
}
else{
    console.log("Odd Number")
} */