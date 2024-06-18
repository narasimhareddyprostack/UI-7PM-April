let prices=[9,99,199,299,399,499,599]
//print all values except 299

//continue- skip the current iteration,and execute next one

for(price of prices){
    if(price === 299)
        continue
    console.log(price)
}