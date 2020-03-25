function formatName(name){
    let nameArray = name.split(' ')
    console.log(nameArray)
    let newName = nameArray.map(element => {

        return element.charAt(0).toUpperCase()+element.slice(1)
    });
    console.log(newName)
}

formatName('data')