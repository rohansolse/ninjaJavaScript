import ChatUI from './ui.js'
import Chatroom from './chat.js'
// dom queries
const chatList = document.querySelector('.chat-list');
const newFormChat = document.querySelector('.new-chat')
const newFormName = document.querySelector('.new-name')
const updatedText = document.querySelector('.update-msg')
const rooms = document.querySelector('.chat-rooms')

newFormChat.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newMsg = newFormChat.message.value.trim()
    chatroom.addChat(newMsg)
        .then(()=> newFormChat.reset())
        .catch(e=>console.log(e))
})

newFormName.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newName = newFormName.name.value.trim()
    chatroom.updateName(newName)
    newFormName.reset()
    updatedText.innerText = `Your new Name is ${newName}`
    setTimeout(()=>{
        updatedText.innerText = ''
    },5000)
})

rooms.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear()
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(data => chatUI.render(data))
    }
})

const username = localStorage.username ? localStorage.username : 'Unknown'
const room = localStorage.room ? localStorage.room : 'general'
// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom(room, username);

// get chats & render
chatroom.getChats(data => chatUI.render(data));