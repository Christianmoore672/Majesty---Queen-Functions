/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}

// define a new function that creates an object that represents your tribute to your queen. 
// That new object will be added to a tribute chest (i.e. an array of tribute objects).

const tributeChest = []

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }

    tributeChest.push(tributeObject)
    // console.log(tributeObject);
}

payTribute(1, "gold", 1)
payTribute(2, "diamonds", 2)
payTribute(3, "a feast", 3)
payTribute(4, "a horse", 3)

// iterate the queen objects to show tribute for each one
for (const queenObject of queens) {

    // each queen will look at ever item to see if its hers
    for (const tributeObject of tributeChest) {
      
        if (tributeObject.queenId === queenObject.id) {
        console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
    }    
  }
}

// QUESTIONS: Block selection not showing in debug console :( also not coding my tribute sentence.
// not sure if i set up terminal correctly to push to github

// you have to use dot notation to access a key in an object

// for(var i = 0; i< queens.length; i++){
//     console.log(queens[i]);
// }

// in order to add an object to an array you must use tge push command INSIDE of the function

// const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
// console.log(athena)

// const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
// console.log(charisse)

// const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
// console.log(jenna)

// const ramona = hailTheQueen("Ramona")
// console.log(ramona)

// const monica = hailTheQueen("Monica Dinglehopper")
// console.log(monica)
