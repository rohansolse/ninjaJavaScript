// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom{
    constructor(room,username){
        this.room = room;
        this.username = username
        this.chats = db.collection('chats')
    }
    async addChat(message){
        const now = new Date()
        const chat = {
            message,
            username : this.username,
            room : this.room,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        }
        return (await this.chats.add(chat))
    }
}

let chatroom = new Chatroom("general", 'rohan')
console.log(chatroom)

chatroom
    .addChat("hello hulahuls!!!")
    .then(()=> console.log("chats added"))
    .catch((error)=> console.log(error))