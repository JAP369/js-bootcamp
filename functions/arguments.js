// Multiple arguments
let add = (a, b, c) => {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = (name = 'Anonymous', score = 0) => {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// total, tipPercent .2
// A 25% tip on $40 would be $10
let getTip = (total, tipPercent = .2) => { 
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}.`

    // let getTip = (total, tipPercent = .2) => { 
    //      return `A ${tipPercent * 100% tip on $${total} would be $${total * tipPercent}.`
} 

let tip = getTip(40, .5)
console.log(tip)

let name = 'Jonathan'
let age = 29
console.log(`Hey, my name is ${name}! I am ${age} years old.`)