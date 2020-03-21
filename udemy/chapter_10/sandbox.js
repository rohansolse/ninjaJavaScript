let form = document.querySelector('.signup-form');
let namee = document.querySelector('#userName')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(form.username.value)
    console.log(namee.value)
})