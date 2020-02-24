"use: strict";  

let money,
    time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenses = {};

let requiredMoney = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется");

expenses.requiredMoney = howMuch;

console.log(expenses);

let dayBudget = howMuch / 30;

console.log(dayBudget);