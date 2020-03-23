const clock = document.querySelector('.clock')

setInterval(()=>{
    let now = new Date()
    let hour = now.getHours()
    let mins =  now.getMinutes()
    let seconds = now.getSeconds()
    clock.innerHTML = `<span>${hour}</span>:<span>${mins}</span>:<span>${seconds}</span>`
},1000)