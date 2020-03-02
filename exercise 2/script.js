"use: strict";  

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
	savings: false
};

/*for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

        if ((typeof(a)) === "string" && (typeof(a)) != null &&
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Успех!");
            appData.expenses[a] = b;
        } else {
            console.log("Что-то пошло не так");
            i--;
        }
}*/
 
/*let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
        i++;

        if ((typeof(a)) === "string" && (typeof(a)) != null &&
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Успех!");
            appData.expenses[a] = b;
        } else {
            console.log("Что-то пошло не так");
            i--;
        }
}*/

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

        if ((typeof(a)) === "string" && (typeof(a)) != null &&
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Успех!");
            appData.expenses[a] = b;
        } else {
            console.log("Что-то пошло не так");
            i--;
        }
    i++;
}
while (i < 2);

appData.moneyPerDay = appData.budget / 3; 

if (appData.budget < 100) {
    console.log("Минимальный уровнь достатка");
} else if (appData.budget > 100 && appData.budget < 2000) {
    console.log("Средний уровнь достатка");
} else if (appData.budget > 2000) {
    console.log("Высокий уровнь достатка");
} else {
    console.log("Упс, что-то пошло не так");
}

alert("Ежедневный бюджет "+ appData.moneyPerDay);

console.log(appData);