
let budget = 40000;

let expenses = [];


const expenseForm = document.getElementById("expense-form");

const expenseName = document.getElementById("expense-name");

const expenseAmount = document.getElementById("expense-amount");

const expenseCategory = document.getElementById("expense-category");

const expenseList = document.getElementById("expense-list");

const budgetDisplay = document.getElementById("budget-display");

const totalExpensesDisplay =
    document.getElementById("total-expenses");

const remainingBalanceDisplay =
    document.getElementById("remaining-balance");

const budgetStatus =
    document.getElementById("budget-status");


budgetDisplay.textContent = budget;


function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}



function updateBudgetStatus(total) {

    const remaining = budget - total;

    if (remaining > 0) {

        budgetStatus.textContent =
            "You are within your budget.";

    } else if (remaining === 0) {

        budgetStatus.textContent =
            "You have used your entire budget.";

    } else {

        budgetStatus.textContent =
            "Warning: You have exceeded your budget.";
    }
}



function displayExpenses() {

    expenseList.innerHTML = "";

    for (let expense of expenses) {

        const listItem = document.createElement("li");

        listItem.textContent =
            `${expense.name} - KES ${expense.amount} - ${expense.category}`;

        expenseList.appendChild(listItem);
    }
}



function updateDashboard() {

    const total = calculateTotalExpenses();

    const remaining = budget - total;

    totalExpensesDisplay.textContent = total;

    remainingBalanceDisplay.textContent = remaining;

    updateBudgetStatus(total);

    displayExpenses();
}


expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = expenseName.value;

    const amount = Number(expenseAmount.value);

    const category = expenseCategory.value;

    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    expenseForm.reset();

    updateDashboard();
});