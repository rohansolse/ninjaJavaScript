const ul = document.querySelector('.people')
const people = ['rohan', 'roshan', 'gaurav', 'akshay', 'prasad']
var html = ``
people.forEach((person)=>{
    html +=`<li style="color:purple">${person}</li>`
})
console.log(html)
ul.innerHTML = html