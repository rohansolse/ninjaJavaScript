import ChatUI from './ui.js'
import Chatroom from './chat.js'
// dom queries
const chatList = document.querySelector('.chat-list');
const newFormChat = document.querySelector('.new-chat')

newFormChat.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newMsg = newFormChat.message.value.trim()
    chatroom.addChat(newMsg)
        .then(()=> newFormChat.reset())
        .catch(e=>console.log(e))
})
// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'karan');

// get chats & render
chatroom.getChats(data => chatUI.render(data));