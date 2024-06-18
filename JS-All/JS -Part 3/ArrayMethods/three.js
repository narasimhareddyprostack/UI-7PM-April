let prices=[98,198,298,398,498]

//create new prices with add +1
//expected output [99,199,299,399,499]

let new_prices=[]
for( price of prices){
    new_prices.push(price+1)
}

console.log(new_prices)