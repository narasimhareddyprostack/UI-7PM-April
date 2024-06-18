class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount){
        console.log("Amount Deposited Successfully",amount)
    }
    withdrawl_Amount(){
        console.log("Amount Withdrawl");
    }
    get_Bal(){
        console.log("Get Bal method")
    }
    close_Account(){
        console.log("Account Closed")
    }
}
let a1=new Account()
a1.open_Account()
a1.deposit_Amount(5000)
a1.withdrawl_Amount()
a1.get_Bal()
a1.close_Account()