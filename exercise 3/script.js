"use: strict";
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if ((typeof (a)) === "string" && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Успех!");
            appData.expenses[a] = b;
        } else {
            console.log("Что-то пошло не так");
            i--;
        }
    }
}
choseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 3).toFixed();
}
detectDayBudget();

function detectLevel() {
    if (appData.budget < 100) {
        console.log("Минимальный уровнь достатка");
    } else if (appData.budget > 100 && appData.budget < 2000) {
        console.log("Средний уровнь достатка");
    } else if (appData.budget > 2000) {
        console.log("Высокий уровнь достатка");
    } else {
        console.log("Упс, что-то пошло не так");
    }
}
detectLevel();

alert("Ежедневный бюджет " + appData.moneyPerDay);

console.log(appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let optionalExpenses = {};

    let q1 = prompt("Статья необязательных расходов?"),
        q2 = prompt("Статья необязательных расходов?"),
        q3 = prompt("Статья необязательных расходов?");

        appData.optionalExpenses[1] = q1;
        appData.optionalExpenses[2] = q2;
        appData.optionalExpenses[3] = q3;
}