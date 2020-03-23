let form = document.querySelector('.signup-form');
let feedback = document.querySelector('.feedback')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name = form.username.value
    const pattern = /^[a-zA-Z]{6,12}$/
    if(pattern.test(name)){
        feedback.style.color = "green"
        feedback.textContent = "This username is valid!"
    }
    else{
        feedback.style.color = "red"
        feedback.textContent = "Username should constain 6 to 10 characters only!!"
    }
})