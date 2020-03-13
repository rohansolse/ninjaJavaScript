let data = {
    firstName : "rohan",
    lastName : "solse",
    age : 28,
    family : ["mom", "dad", "brother"],
    fullName(){
        console.log(this.firstName+this.lastName)
        return this
    }
}
console.log(data.firstName)
console.log(data.fullName())