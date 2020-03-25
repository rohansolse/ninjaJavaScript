let normalArray = [23,45,23,56,45,87]
normalArray.sort((a,b)=>b-a)
// console.log(normalArray)

let dataArray = [
    {name:"rohan",price:20},
    {name:"roshan",price:30},
    {name:"rohit",price:10},
    {name:"sagar",price:40},
    {name:"karan",price:50}
]

let filteredArray = dataArray
    .filter((element)=> element.price > 20)
    .map(product => `${product.name} has ${product.price/2} price`)

console.log(filteredArray)