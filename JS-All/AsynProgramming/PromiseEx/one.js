let goToMovie=(success,failure)=>{
    let amount=1200
    if(amount > 500){
        success("Go To Movie!Enjoy")
    }
    else{
        failure("Go to Home!/PG")
    }
}

goToMovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})