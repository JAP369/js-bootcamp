const todos = [{
    text: 'Learn JavaScript course',
    completed: true
}, {
    text: 'Kickboxing Training',
    completed: true
}, {
    text: 'Business Project reasearch',
    completed: false
}, {
    text: 'Complete Jerry App Program',
    completed: false
}, {
    text: 'Recite New cocktail recipes',
    completed: false
}]



const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
} 

const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

const sortToDos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortToDos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// 1. convert arrray to array of objects -> Text, completed
// 2. Create function to remove a todo by text value


// deleteTodo(todos, '!Recite New cocktail recipes')
// console.log(todos)

// // //  Delete the 3rd item
// // myTodos.splice(2, 1)
// // // Add a new item onto the end
// // myTodos.push('Buy coffee')
// // // Remove the first item from the list
// // myTodos.shift()

// console.log(`You have ${myTodos.length} to do's!`)
// // console.log(`Todo: ${myTodos[0]}`)
// // console.log(`Todo: ${myTodos[myTodos.length - 2]}`)

// myTodos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })
// // console.log(myTodos)

// // 1. The first item
// // 2. The second item

// for (let count = 0; count < myTodos.length; count++) {
//     const num = count + 1
//     const todo = myTodos[count]
//     console.log(`${count}. ${todo}`)
// }
