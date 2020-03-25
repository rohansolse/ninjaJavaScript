const recipes = document.querySelector('ol');
const formData = document.querySelector('form')
const unsubs = document.querySelector('button')

function addRecipes(recipe, id) {
    let newRecipeHTML = `<li data-id="${id}">
    <div>${recipe.title}</div>
    <button class="btn btn-danger btn-sm my-2">Delete</button>
    </li>`
    recipes.innerHTML += newRecipeHTML
}

function deleteRecipes(id) {
    let allRrecipes = document.querySelectorAll('li')
    allRrecipes.forEach((recipe) => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove()
        }
    })
}

function formatName(name) {
    return name
        .split(' ')
        .map(element => element.charAt(0).toUpperCase() + element.slice(1))
        .join(' ')
}

//get data form firebase
// db.collection('recipes').get()
//     .then((snapshot) => {
//         snapshot.docs.forEach(element => {
//             addRecipes(element.data(),element.id)
//         });
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc
        if (change.type == 'added') {
            addRecipes(doc.data(), doc.id)
        }
        else if (change.type === 'removed') {
            deleteRecipes(doc.id)
        }
    })
})

formData.addEventListener('submit', (e) => {
    e.preventDefault()
    let now = new Date()
    let newRecipe = {
        title: formatName(formData.recipe.value),
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    //add data to firebase
    db.collection('recipes').add(newRecipe)
        .then(() => {
            console.log('recepie added')
        })
        .catch((error) => {
            console.log(error)
        })
})

recipes.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id')
        //delete data from firebase
        db.collection('recipes').doc(id).delete()
            .then(() => {
                console.log("Recipe Deleted!!")
            })
            .catch((error) => {
                console.log(error)
            })
    }
})

unsubs.addEventListener('click',()=>   {
    unsub()
    console.log("unsubscribe")
})