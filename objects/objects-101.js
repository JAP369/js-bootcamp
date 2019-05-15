let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location

// $name is $age and lives in $location
// Increase age by 1 and print message again

let myInfo = {
    name: 'Jonathan',
    age: 29,
    location: 'Hong Kong'
}

console.log(`${myInfo.name} is ${myInfo.age} years old and lives in ${myInfo.location}`)

myInfo.age = myInfo.age + 1

console.log(`${myInfo.name} is ${myInfo.age} years old and lives in ${myInfo.location}`)
