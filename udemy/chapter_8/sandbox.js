let data = document.querySelector('.copy-me')
data.addEventListener('copy',(e)=>{
    console.log("content copied")
})

let boxData = document.querySelector('.box')
let boxDataStyle = document.getElementsByClassName('box')
boxDataStyle[0].style.textAlign="center"
boxDataStyle[0].style.color="green"
boxData.addEventListener('mousemove',(e)=>{
    boxData.innerHTML = `X-pos : ${e.offsetX} <br> Y-pos : ${e.offsetY}`
})