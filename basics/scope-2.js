// Global
    // Local
        // Local
    // Local    

// Variable Shadowing

// let name = 'Jonathan'

if (true) {
    // let name = 'Paita'

    if (true) {
        let name = 'Thor'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}