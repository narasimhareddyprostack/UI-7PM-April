const bcrypt = require('bcrypt')

let user={
    email:'rahul@gmail.com',
    cc:'4455667799998888',
    cvv:4567
}
console.log(user)
let salt = bcrypt.genSaltSync(10)

let new_cc=bcrypt.hashSync(user.cc,salt)


console.log(new_cc)

user={
    ...user,cc:new_cc
}

console.log(user)