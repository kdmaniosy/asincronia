fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.title)
})