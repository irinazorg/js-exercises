"use: stcict";

let start = document.getElementById("start"),

    budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearsavingsValue = document.getElementsByClassName("yearsavings-value"),
    
    expensesItem = document.getElementsByClassName("expenses-item"),
    
    approveBtn = document.getElementsByTagName("button")[0],
    approveOptBtn = document.getElementsByTagName("button")[1],
    calculateBtn = document.getElementsByTagName("button")[2],
    
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
