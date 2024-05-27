fetch('https://jsonplaceholder.typicode.com/users')
.then(resp=>resp.json())
.then(data=>console.log(data))

/* .then((resp)=>{
    return resp.json()
})
.then((data)=>{
    console.log(data)
}) */