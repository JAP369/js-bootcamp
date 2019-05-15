let isAccountLocked = false
let userRole = 'admin' 

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// Challenge area

let temp = 35

// It is freezing outside!
if (temp <= 10) {
    console.log('It is freezing outside!')
// It is hot outside!
} else if (temp >= 21) {
    console.log('It is hot outside!')
// Go for it. It is pretty nice.
} else {
    console.log('Go for it. It is pretty nice outside!')
}
