let name = '   Jonathan Paita'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123wordpass098'
console.log(password.includes('password'))

// Trim method
console.log(name.trim())

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
    return (password.length > 8 && !password.includes('password'))
}
// lenghth os more than 8 - and it doesnt contain the word password

console.log(isValidPassword('asdadd'))
console.log(isValidPassword('as3535radd'))
console.log(isValidPassword('password'))