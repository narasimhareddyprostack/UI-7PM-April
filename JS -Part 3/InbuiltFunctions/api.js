fetch('https://jsonplaceholder.typicode.com/users')
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data)
})