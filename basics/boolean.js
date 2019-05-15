// === - equality operator
// !== -  not equality operator
// < -  less than operator
// > -  greater than operator
// <= -  less than or equal to operator
// => -  greater than or equal to operator

let temp = 30
// let isFreezing = temp <= 32

if (temp <= 32) {
    console.log('It is freezing outside!')
}

if (temp >= 110) {
    console.log('It is way too hot outside!')
}

// challenge area

// create age set yo your age
let myAge = 29
// calculate is child - if they are 7 or under
let isChild = myAge <= 7
// calculate is senior - if they are 65 or older
let isSenior = myAge >= 65
// print is child value
console.log(isChild)
// print is senior value
console.log(isSenior)

// If 7 or under print message about child pricing
if (myAge <= 7) {
    console.log('You have a free ice cream!')
}
// If 65 or older print message about senior discount
if (myAge >= 65) {
    console.log('You have 50% discount on all purchases')
}