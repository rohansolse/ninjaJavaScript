var formData = document.forms.myForm
var message = document.getElementById('message')

formData.onsubmit = function(){
    if(formData.name.value == ''){
        message.innerHTML = "Please enter name."
        return false
    }else{
        message.innerHTML=""
        return true
    }
}