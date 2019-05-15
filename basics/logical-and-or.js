let temp = 55

// Logical AND Operator - True if both sides are true. False otherwise
// Logical OR operator - True if at least one side is true. False otherwise

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh! Do want you want!')
}

// Challenge area

let isGuestOneVegan = false;
let isGuestTwoVegan = true;

// Are both vegan? Only offer up vegan dishes.
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only Offer up vegan dishes')
// At least one vegan? Make sure to offer up some vegan options.
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options')
// Else, Offer up anything on the menu
} else {
    console.log('Offer up anything on the menu')
}

