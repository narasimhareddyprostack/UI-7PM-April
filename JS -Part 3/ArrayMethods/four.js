let prices=[98,198,298,398,498]

//create new prices with add +1
//expected output [99,199,299,399,499]

let new_prices=prices.forEach((price)=>{
    return price+1
})

console.log(new_prices)