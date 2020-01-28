// var message = document.getElementById("message")
// function showMessage(){
//     message.className = "show"
// }
// setTimeout(showMessage,3000)

var colorChanger = document.getElementById("color-changer")
let colors = ["red","blue","pink","yellow","green"]
let counter = 0;
function ChangeColor(){
    if(counter >= colors.length){
        counter = 0
    }
    colorChanger.style.background = colors[counter]
    counter++
}

var intervalTimer = setInterval(ChangeColor,3000 );

colorChanger.onclick = function(){
    clearInterval(intervalTimer)
}