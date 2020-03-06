"use: strict";
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    choseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 3).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.budget < 100) {
            console.log("Минимальный уровнь достатка");
        } else if (appData.budget > 100 && appData.budget < 2000) {
            console.log("Средний уровнь достатка");
        } else if (appData.budget > 2000) {
            console.log("Высокий уровнь достатка");
        } else {
            console.log("Упс, что-то пошло не так");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let q = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = q;
        }
    },
    choseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Введены некоректные данные или не введены вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function(itemArr, i) {
            alert("Способы доп. заработка: " + (i+1) + itemArr);
        });
    }
};


console.log(appData);