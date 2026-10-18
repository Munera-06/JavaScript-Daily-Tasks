# Advanced Monthly Budget Tracker

## Project Overview

The **Advanced Monthly Budget Tracker** is a web-based application developed using HTML, CSS, and JavaScript. It helps users manage their monthly income and expenses, track their spending, and calculate their remaining balance.

Users can add new expenses, view their expense history, delete individual expenses, and monitor their monthly budget through a simple and interactive interface.

## Technologies Used

- **HTML5** – Creates the structure of the application.
- **CSS3** – Styles the interface and improves the visual appearance.
- **JavaScript** – Handles expense management, calculations, and user interactions.

## Features

- Add monthly income and expense details.
- Add new expenses with relevant information.
- View the list of recorded expenses.
- Delete individual expenses from the history.
- Update the expense summary when records change.
- Calculate total expenses and remaining balance.
- Display budget information dynamically.
- Provide an interactive and user-friendly interface.

## Project Structure

```text
Task1-Adv-Monthly-Budget-Tracker/
├── index.html
├── style.css
├── script.js
└── Output/
    └── screenshots
```

## Step-by-Step Procedure

### Step 1: Open the Monthly Budget Tracker

Open the application in a browser. The main interface displays the budget information and available expense management options.

**Output Screenshot:**

<img width="938" height="437" alt="Output-Home-Page" src="https://github.com/user-attachments/assets/43b5efad-6234-45b8-8ca7-4cb53c8bf95b" />

### Step 2: Enter Monthly Income

Enter the monthly income in the appropriate input field to establish the budget available for the month.

**Output Screenshot:**

<img width="938" height="433" alt="Output-Monthly-Income" src="https://github.com/user-attachments/assets/681fc545-cdbd-4b76-8fa1-3b5a0c749ef2" />
<img width="938" height="436" alt="Output-After-Clicking-SaveBudget-Button" src="https://github.com/user-attachments/assets/3ee6b979-b221-42f1-9b30-421fd62e4969" />

### Step 3: Add a New Expense

Enter the required expense details, such as the expense name, amount, and category if available. Submit the details to add the expense to the tracker.

The newly added expense should appear in the expense history, and the budget summary should update accordingly.

**Output Screenshot:**

<img width="934" height="409" alt="Output-Add-Expenses" src="https://github.com/user-attachments/assets/517cab66-416a-422c-8f9b-44a9300fd4a7" />
<img width="932" height="408" alt="Output-After-Clicking-Add-Expenses-Button" src="https://github.com/user-attachments/assets/80ea1947-a14b-4ab8-b850-c08a7c70ee49" />

### Step 4: View Expense History

View the recorded expenses in the expense history section. This allows users to review their spending and identify where their money is being used.

**Output Screenshot:**

<img width="922" height="332" alt="Ouput-expense-history" src="https://github.com/user-attachments/assets/334afd78-52f4-4462-8dd3-7faa41fd1da6" />

### Step 5: Delete an Expense

Select the delete option associated with an expense to remove that particular record from the history.

After deletion, verify that the selected expense is no longer displayed and that the total expenses and remaining balance are recalculated correctly.

**Output Screenshot:**

<img width="923" height="298" alt="Output-After-Deleting-Shopping-Expense" src="https://github.com/user-attachments/assets/e871a447-fbad-4a6c-af04-7deef744499e" />

### Step 6: Search Expenses by Name

Use the search field in the expense history section to find a specific expense by entering its name. The application displays matching expense records, making it easier to locate an expense without manually checking the entire list.

**Output Screenshot:**

<img width="924" height="209" alt="Output-search-expense" src="https://github.com/user-attachments/assets/ff1f8789-8add-4280-88ab-fe1c3e6c3eee" />

### Step 7: Sort Expenses by Category

Use the category sorting or filtering option in the expense history section to organize or display expenses according to their category. This helps users review spending in different categories more easily.

**Output Screenshot:**

<img width="925" height="239" alt="Output-sort-expense-category" src="https://github.com/user-attachments/assets/dec0cd3f-5d3e-4bcc-9467-c7cf89b2af74" />

### Step 8: Verify the Updated Budget Summary

After adding or deleting expenses, check the updated budget summary. The total expenses and remaining balance should reflect the latest records.

**Output Screenshot:**

<img width="933" height="229" alt="Output-updated-budget" src="https://github.com/user-attachments/assets/c4e775f0-26b3-4513-9711-2cba49bad690" />

### Step 9: View the Updated Monthly Budget Dashboard

After adding or deleting expenses, return to the home page to view the updated monthly budget summary. The dashboard displays the following details:

- **Monthly Income:** The total income entered for the month.
- **Total Expense:** The total amount spent on recorded expenses.
- **Remaining Balance:** The amount left after subtracting total expenses from monthly income.
- **Saving Rate:** The percentage of income remaining after expenses.
- **Budget Usage:** The percentage of the monthly income used for expenses.

These values update based on the latest expense records, helping users monitor their spending, understand their savings, and manage their monthly budget effectively.

**Output Screenshot:**

<img width="934" height="419" alt="Output-updated-budget-dashboard" src="https://github.com/user-attachments/assets/3f8ea182-0621-42fd-8bb7-3fadd486e8b8" />

**Calculation Formulas:**

- Remaining Balance = Monthly Income − Total Expenses
- Saving Rate = (Remaining Balance / Monthly Income) × 100
- Budget Usage = (Total Expenses / Monthly Income) × 100

## How the Application Works

1. The user enters the monthly income.
2. The user adds expenses using the available input fields.
3. JavaScript processes the entered details.
4. The application displays the recorded expenses in the history.
5. The user can delete an individual expense when required.
6. The expense total and remaining balance are updated based on the changes.

**Remaining Balance = Monthly Income − Total Expenses**

## Concepts Practiced

- DOM manipulation
- JavaScript functions
- Event handling
- Arrays and objects
- Form input handling
- Array methods for adding and removing records
- Arithmetic calculations
- Dynamic content updates
- Separating HTML, CSS, and JavaScript into different files

## Learning Outcome

This project helped me understand how to develop an interactive budget management application using HTML, CSS, and JavaScript. I practised handling user input, managing expense records, deleting entries, and updating calculations dynamically.

## Author

**Munera-06**
