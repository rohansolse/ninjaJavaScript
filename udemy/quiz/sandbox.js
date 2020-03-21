let form = document.querySelector('.signup-form');
let feedback = document.querySelector('.feedback')
const pattern = /^[a-zA-Z]{6,12}$/

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = form.username.value
    if(pattern.test(name)){
        feedback.style.color = "green"
        feedback.textContent = "This username is valid!"
    }
    else{
        feedback.style.color = "red"
        feedback.textContent = "Username should constain 6 to 10 characters only!!"
    }
})

form.username.addEventListener('keyup',(e)=>{
    let currentUsername = e.target.value
    if(pattern.test(currentUsername)){
        form.username.setAttribute('class','success')
    }else{
        form.username.setAttribute('class','failure')
    }
})