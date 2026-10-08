 SpendWise

SpendWise is a personal budgeting dashboard designed to help users track their expenses and understand how much money they have remaining from their budget.

## Improvements Made This Week

This week, SpendWise was upgraded from a basic JavaScript budgeting application into an interactive web application.

The improvements include:

* Adding expenses through a form
* Storing multiple expenses in an array
* Processing expenses using loops
* Calculating total expenses
* Calculating the remaining balance
* Using conditional statements to provide budget feedback
* Updating the webpage dynamically using DOM manipulation
* Using event listeners to respond to user actions
* Displaying expense records directly on the dashboard

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

* Conditional statements
* Arrays
* Loops
* DOM manipulation
* Event listeners
* Functions
* Objects
* User input
* Calculations

## Conditionals

Conditional statements are used to evaluate the user's budget situation.

The application checks the remaining balance and provides different feedback.

```javascript
if (remaining > 0) {
    budgetStatus.textContent = "You are within your budget.";
} else if (remaining === 0) {
    budgetStatus.textContent = "You have used your entire budget.";
} else {
    budgetStatus.textContent = "Warning: You have exceeded your budget.";
}
```

If the remaining balance is greater than zero, the user is informed that they are within their budget.

If the remaining balance is exactly zero, the application informs the user that the entire budget has been used.

If the remaining balance is below zero, the application warns the user that they have exceeded their budget.

## Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

When a user adds an expense, the expense is added to the array using:

```javascript
expenses.push(newExpense);
```

Each expense is stored as an object containing its name, amount, and category.

For example:

```javascript
{
    name: "Lunch",
    amount: 500,
    category: "Food"
}
```

This allows SpendWise to manage multiple expense records instead of storing each expense in a separate variable.

## Loops

Loops are used to process all the expenses stored in the array.

For example:

```javascript
for (let expense of expenses) {
    total += expense.amount;
}
```

The loop goes through each expense and adds its amount to calculate the total expenses.

A loop is also used to display all expense records on the webpage.

## DOM Manipulation

The Document Object Model (DOM) is used to update the webpage dynamically.

SpendWise uses JavaScript to find HTML elements using methods such as:

```javascript
document.getElementById()
```

The application updates the displayed budget information using:

```javascript
totalExpensesDisplay.textContent = total;
remainingBalanceDisplay.textContent = remaining;
```

Expense records are also created dynamically using:

```javascript
document.createElement("li");
```

and added to the webpage using:

```javascript
expenseList.appendChild(listItem);
```

This means the dashboard changes without requiring the user to manually refresh the page.

## User Interactions and Events

SpendWise uses an event listener to respond when the user submits the expense form.

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

When the form is submitted, JavaScript collects the expense name, amount, and category.

The information is then stored as an expense object and added to the expenses array.

After the new expense is added, the dashboard is updated automatically.

This creates the following flow:

```text
User enters expense
        ↓
User submits form
        ↓
Event listener responds
        ↓
Expense object is created
        ↓
Expense is added to the array
        ↓
Expenses are processed
        ↓
Dashboard is updated
```

## Challenges Encountered

One challenge was making sure that user input was converted into numbers before performing calculations. This was resolved by using the `Number()` function when collecting the expense amount.

Another challenge was updating the webpage after adding a new expense. This was resolved by using DOM manipulation and updating the relevant HTML elements with JavaScript.

A further challenge was displaying multiple expense records. This was solved by storing expenses in an array and using a `for...of` loop to process and display each record.

## Testing

The application was tested by:

* Adding different expense records
* Checking that expenses appear on the dashboard
* Checking total expenses
* Checking the remaining balance
* Testing the within-budget condition
* Testing the exact-budget condition
* Testing the exceeded-budget condition
* Adding multiple expense records

## How to Run

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.
4. Enter an expense name, amount, and category.
5. Click the **Add Expense** button.
6. Check the dashboard to see the updated budget information and expense records.

## Project Files

* `index.html` - Contains the structure of the SpendWise dashboard.
* `style.css` - Contains the styling for the dashboard.
* `script.js` - Contains the JavaScript logic and interactivity.
* `README.md` - Contains project documentation.

## Conclusion

The updated SpendWise application demonstrates how JavaScript can make a webpage interactive. Users can enter expenses, the application stores and processes the records, performs calculations, makes budget decisions, and dynamically updates the dashboard.
