let button = document.querySelector('button')
button.addEventListener('click',()=>{
    window.location.reload();
})

// let list = document.querySelectorAll('li')
// list.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         console.log(item)
//         item.remove()
//     })
// })

let ul = document.querySelector('ul')

// let append = document.getElementById('append')
// append.addEventListener('click',()=>{
//     let li = document.createElement('li')
//     li.textContent = 'new data'
//     ul.append(li)
// })

// let prepend = document.getElementById('prepend')
// prepend.addEventListener('click',()=>{
//     let li = document.createElement('li')
//     li.textContent = 'first data'
//     ul.prepend(li)
// })

ul.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.remove()
    }
})