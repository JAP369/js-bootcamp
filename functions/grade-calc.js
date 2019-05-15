// student score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-90, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalScore = 20) {
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
        // return `You got a A (${percent}%)!`
    } else if (percent >= 80) {
        letterGrade = 'B'
        // return `You got a B (${percent}%)!`
    } else if (percent >= 70) {
        letterGrade = 'C'
        // return `You got a C (${percent}%)!`
    } else if (percent >= 60) {
        letterGrade = 'D'
        // return `You got a D (${percent}%)!`
    } else  {
        letterGrade = 'F'
        // return `You got an F (${percent}%)!`
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

const result = gradeCalc(15, 20)

console.log(result)