let addForm = document.querySelector('.add')
let todolist = document.querySelector('.todos')

function todoWithHTMLAdder(newTodo){
    let newTodoWithHTML = 
    `<li class="list-group-item d-flex justify-content-between align-item-center">
        <span>${newTodo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    todolist.innerHTML += newTodoWithHTML
}

addForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newTodo = addForm.add.value.trim()
    if(newTodo.length){
        todoWithHTMLAdder(newTodo)
        addForm.reset()
    }
})

todolist.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})