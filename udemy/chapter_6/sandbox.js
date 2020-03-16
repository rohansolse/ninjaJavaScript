let list = document.querySelectorAll('p')
console.log(list)
list.forEach((p)=>{
    if(p.textContent.includes('error')){
        console.log(p.classList)
        p.classList.add('error')
    }
    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
})

let data = document.querySelector('body > h1')
// console.log(data)
let data2 = document.querySelector('p')
// console.log(data2)
// data2.innerText = `its new data`

let datas = document.querySelectorAll('p')
// console.log(datas)

let error = document.querySelector('.error')
// console.log(error)

//get element by ID
let title = document.getElementById('page-title')
// console.log(title)
// title.innerHTML += `<h2> and something new<h2>`
// title.innerText="hello world!"
// title.style.color='blue'
// title.style.margin="5%"

let classData = document.getElementsByClassName('error')
// console.log(classData)

let link = document.querySelector('a')
// link.innerText = "this is facebook"
// link.setAttribute('href', "https://facebook.com ")