class User {
    constructor(name, email) {
        this.userName = name,
            this.emailId = email
    }
    login() {
        console.log(`${this.userName} is just logged In`)
        return this
    }
    logout() {
        console.log(`${this.userName} is just logged Out`)
    }
}

//constructor as function
// function User(name, email) {
//     this.userName = name
//     this.emailId = email
// }

// User.prototype.login = function () {
//     console.log(`${this.userName} is just logged In`)
//     return this
// }

// User.prototype.logout = function () {
//     console.log(`${this.userName} is just logged Out`)
//     return this
// }

class Admin extends User {
    constructor(name, email, title) {
        super(name, email)
        this.title = title
    }
    deleteUser(user) {
        users = users.filter(u => u.userName !== user.userName)
    }
}
let userOne = new User('rohan', 'rohansolse@gmail.com')
let userTwo = new User('roshan', 'ronsolse@gmail.com')
let userThree = new Admin('admin', 'admin@gmail.com', 'I am the boss')
let users = [userOne, userTwo, userThree]
console.log(users)
userOne.login().logout()
// userTwo.login().logout()
userThree.deleteUser(userTwo)
console.log(users)

