class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    min_Bal=500
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
}
let a1=new Account(101,"Rahul",5000)
let a2=new Account(102,"Sonia",6000)
let a3=new Account(103,"Priyanka",10000)
console.log(a1)
console.log(a2)
console.log(a3)
a1.deposit_Amount(1000)
a1.deposit_Amount(500)
a2.deposit_Amount(2000)
a2.deposit_Amount(1000)
console.log(a1)
console.log(a2)

console.log("***********")
console.log(a1.get_Bal())
console.log(a2.get_Bal())

console.log("**********")

a1.withdrawl_Amount(50)
a2.withdrawl_Amount(5000)
a3.withdrawl_Amount(6000)

console.log("***********")
console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log(a3.get_Bal())