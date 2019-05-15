// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

// let num = 3
let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// challenge area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

// Call a couple of times (32 -> 0) (68 -> 20)

// Print the converted values
console.log(tempOne)
console.log(tempTwo)