const account = {
    name: 'Jonathan Paita',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0 

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalace = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

// expense -> description, amount
// addExpense -> description, amount
//getAccountSummary -> total up all expenses -> Jonathan Paita has $1000 in expenses.



account.addExpense('Rent', 950)
account.addExpense('Food', 2)
account.addIncome('Freelance', 1000)
console.log(account.getAccountSummary())

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary

// Jonathan Paita has a balance of $10. $100 in income. $90 in expense