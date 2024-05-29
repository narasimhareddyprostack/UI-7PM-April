class Test{
    constructor(name) {
            console.log("Special method", name)
    }
    get_Bal(){
        console.log("Normal Method")
    }
}

let t1=new Test("Rahul")
let t2=new Test("Sonia")
let t3=new Test("Priyanka")
t1.get_Bal()
t1.get_Bal()
t1.get_Bal()
t1.get_Bal()
t1.get_Bal()