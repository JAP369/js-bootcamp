const notes = [{
    title: 'work',
    body: '5 days a week'
}, {
    title: 'train',
    body: '2 times per week'
}, {
    title: 'rest',
    body: 'at least 6 hours sleep'
}]

// console.log(notes.pop())
// notes.push('Note 4')
 
// console.log(notes.shift())
// notes.unshift('Note 0')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is the new note 3' 

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

// console.log(findNotes(notes, 'rest'))

// const note = findNote(notes, 'work')
// console.log(note)

// console.log(notes.length)
// console.log(notes)
// // console.log(notes[notes.length - 1])

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Note 122'
// })

// console.log(index)

// // Create an array with five todos
// // You have x todos
// // Print the first and second to last items -> Todo: walk the dog

// // // Counting... 1
// // for (let count = 2; count >= 0; count-- ) {
// //     console.log(count)
// // }

// // for (let count = 0; count < notes.length; count++) {
// //     console.log(notes[count])
// // } 