
let startBtn = document.getElementById("start"),

    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    year = document.getElementsByClassName("year-value")[0],
    month = document.getElementsByClassName("month-value")[0],
    day = document.getElementsByClassName("day-value")[0],
    
    expensesItem = document.getElementsByClassName("expenses-item"),

    chackSavings = document.getElementById("savings"),
    
    approveBtn = document.getElementsByTagName("button")[0],
    approveOptBtn = document.getElementsByTagName("button")[1],
    calculateBtn = document.getElementsByTagName("button")[2],

    incomeItem = document.querySelector(".choose-income"),

    sumValue = document.querySelector(".choose-sum"),
    percentValue = document.querySelector(".choose-percent"),

    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");

let money, time;

approveBtn.disabled = true;
approveOptBtn.disabled = true;
calculateBtn.disabled = true;

startBtn.addEventListener("click", function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    approveBtn.disabled = false;
    approveOptBtn.disabled = false;
    calculateBtn.disabled = false;
});

approveBtn.addEventListener("click", function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === "string" && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Успех!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Что-то пошло не так");
            i--;
        }
        expensesValue.textContent = sum;
    }
});

approveOptBtn.addEventListener("click", function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let q = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = q;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

calculateBtn.addEventListener("click", function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровнь достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровнь достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровнь достатка";
        } else {
            levelValue.textContent = "Упс, что-то пошло не так";
        }
    } else {
        daybudgetValue.textContent = "Упс, что-то пошло не так";
    }
});

incomeItem.addEventListener("input", function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

chackSavings.addEventListener("click", function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function() {
    if (appData.savings == true) {
        let sumSavings = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sumSavings / 100 / 12 * percent;
        appData.yearIncome = sumSavings / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function() {
    if (appData.savings == true) {
        let sumSavings = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sumSavings / 100 / 12 * percent;
        appData.yearIncome = sumSavings / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 3).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        
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