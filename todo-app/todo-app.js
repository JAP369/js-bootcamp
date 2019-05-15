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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
}) 

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// You have 2 todos left(p element)
// Add a p for each todo above (use text value)

// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e) {
    e.target.textContent = 'the button was clicked'
})

// remove all to-dos
document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll()
})



// Document Object Model

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//     // console.log('p.textContent')
//     // p.textContent = 'XOX'
//     // p.remove()
// })

// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the')) {
//         paragraph.remove()
//     }
// })