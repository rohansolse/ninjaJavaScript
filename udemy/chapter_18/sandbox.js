// Store data in local storage 
localStorage.setItem('name','rohan')
localStorage.setItem('age',28)

// get data in local storage
let name = localStorage.getItem('name')
console.log(name)

// update data
localStorage.setItem('name','sagar')
let newName = localStorage.getItem('name')
console.log(newName)
localStorage.age = 50
let newAge = localStorage.getItem('age')
console.log(newAge)

// deleting data
// localStorage.removeItem('name')
localStorage.clear()
name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(name,age)