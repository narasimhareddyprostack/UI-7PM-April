import Account from './account'
class SA extends Account{
    acc_Id;
    acc_Bal=0;
    min_Bal=500;
    constructor(id,name,email,amount) {
        super(name,email)
        this.acc_Id=id;
        this.acc_Bal=amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let sa1=new SA(101,'Rahul','rg@gmail.com',6000)
console.log(sa1)