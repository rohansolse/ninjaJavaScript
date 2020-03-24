const request = new XMLHttpRequest();


function getTodos(callback){
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            callback(undefined,request.responseText)
        }
        else if(request.readyState === 4){
            callback("Could not fetch data",undefined)
        }
    })
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/')
    request.send()
}

getTodos((error,data)=>{
    console.log("callback fired.")
    if(error){
        console.log("error : ",error)
    }
    if(data){
        console.log("data : ",data)
    }
})