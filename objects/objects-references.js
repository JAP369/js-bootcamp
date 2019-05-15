let myAccount = {
    name:'Jonathan Paita',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

 // addIncome
 let addIncome = function (account, income) {
     account.income = account.income + income
 }
 // resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
} 

 // getAccountSummary
// Account for Jonathan has $900. $1000 in income. $100 in expenses.
 let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income}. $${account.expenses} in expenses.`
 }


 // addIncome
 addIncome(myAccount, 2000)
  // addExpense
 addExpense(myAccount, 2.5)
  // addExpense
 addExpense(myAccount, 10)
 // getAccountSummary
 console.log(getAccountSummary(myAccount))
 // resetAccount
 resetAccount(myAccount)
 // getAccountSummary
 console.log(getAccountSummary(myAccount))
