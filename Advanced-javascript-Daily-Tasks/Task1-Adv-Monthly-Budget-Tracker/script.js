
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let settings = JSON.parse(localStorage.getItem("budgetSettings")) || {
    income: 0,
    limit: 0
};

function saveData() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("budgetSettings", JSON.stringify(settings));
}

function formatMoney(amount) {
    return "₹" + amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}

function saveSettings() {
    let incomeValue = document.getElementById("income").value;
    let limitValue = document.getElementById("budgetLimit").value;
    let message = document.getElementById("formMessage");

    if (incomeValue === "" || limitValue === "") {
        message.textContent = "Please enter income and budget limit.";
        return;
    }

    let income = Number(incomeValue);
    let limit = Number(limitValue);

    if (!Number.isFinite(income) || !Number.isFinite(limit) ||
        income <= 0 || limit <= 0) {
        message.textContent = "Income and budget limit must be positive amounts.";
        return;
    }

    settings.income = income;
    settings.limit = limit;

    saveData();
    renderApp();

    message.textContent = "Budget settings saved successfully.";
}

function addExpense() {
    let description = document.getElementById("description").value.trim();
    let amountValue = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("expenseDate").value;
    let message = document.getElementById("formMessage");

    if (description === "" || amountValue === "" ||
        category === "" || date === "") {
        message.textContent = "Please fill all expense fields.";
        return;
    }

    let amount = Number(amountValue);

    if (!Number.isFinite(amount) || amount <= 0) {
        message.textContent = "Enter a valid expense amount.";
        return;
    }

    if (![
        "Food", "Travel", "Rent", "Shopping",
        "Bills", "Health", "Other"
    ].includes(category)) {
        message.textContent = "Please select a valid category.";
        return;
    }

    let expense = {
        id: Date.now().toString() + Math.random().toString(36).slice(2),
        description: description,
        amount: amount,
        category: category,
        date: date
    };

    expenses.push(expense);

    saveData();
    renderApp();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    message.textContent = "Expense added successfully.";
}

function deleteExpense(id) {
    expenses = expenses.filter(function (expense) {
        return expense.id !== id;
    });

    saveData();
    renderApp();

    document.getElementById("formMessage").textContent =
        "Expense deleted successfully.";
}

function renderApp() {
    let totalExpenses = expenses.reduce(function (total, expense) {
        return total + expense.amount;
    }, 0);

    let balance = settings.income - totalExpenses;

    let savingsRate = settings.income > 0
        ? (balance / settings.income) * 100
        : 0;

    document.getElementById("income").value =
        settings.income || "";

    document.getElementById("budgetLimit").value =
        settings.limit || "";

    document.getElementById("totalIncome").textContent =
        formatMoney(settings.income);

    document.getElementById("totalExpenses").textContent =
        formatMoney(totalExpenses);

    document.getElementById("balance").textContent =
        formatMoney(balance);

    document.getElementById("savingsRate").textContent =
        savingsRate.toFixed(2) + "%";

    document.getElementById("balance").style.color =
        balance < 0 ? "#c94c4c" : "#245b4b";

    document.getElementById("savingsRate").style.color =
        savingsRate < 0 ? "#c94c4c" : "#245b4b";

    updateBudgetProgress(totalExpenses);
    renderExpenses();
    renderCategorySummary();
}

function updateBudgetProgress(totalExpenses) {
    let progressBar = document.getElementById("progressBar");
    let message = document.getElementById("budgetMessage");

    if (settings.limit <= 0) {
        progressBar.style.width = "0%";
        message.textContent = "Set a budget limit to track your spending.";
        return;
    }

    let percentage = (totalExpenses / settings.limit) * 100;

    progressBar.style.width = Math.min(percentage, 100) + "%";

    if (percentage >= 100) {
        progressBar.style.background = "#c94c4c";
        message.textContent =
            "Budget exceeded! You spent " +
            formatMoney(totalExpenses - settings.limit) +
            " above your limit.";
    } else if (percentage >= 80) {
        progressBar.style.background = "#d99528";
        message.textContent =
            "Warning! You have used " + percentage.toFixed(1) +
            "% of your budget.";
    } else {
        progressBar.style.background = "#40826d";
        message.textContent =
            "You have used " + percentage.toFixed(1) +
            "% of your budget. Remaining budget: " +
            formatMoney(settings.limit - totalExpenses);
    }
}

function renderExpenses() {
    let searchText = document.getElementById("search").value
        .trim().toLowerCase();

    let selectedCategory =
        document.getElementById("filterCategory").value;

    let filteredExpenses = expenses.filter(function (expense) {
        let matchesSearch =
            expense.description.toLowerCase().includes(searchText);

        let matchesCategory =
            selectedCategory === "All" ||
            expense.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    filteredExpenses.sort(function (a, b) {
        return b.date.localeCompare(a.date);
    });

    let list = document.getElementById("expenseList");
    let emptyMessage = document.getElementById("emptyMessage");

    if (filteredExpenses.length === 0) {
        list.innerHTML = "";
        emptyMessage.textContent = expenses.length === 0
            ? "No expenses added yet."
            : "No expenses match your search.";
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    list.innerHTML = filteredExpenses.map(function (expense) {
        return `
            <tr>
                <td>${escapeHTML(expense.description)}</td>
                <td>${escapeHTML(expense.category)}</td>
                <td>${escapeHTML(expense.date)}</td>
                <td>${formatMoney(expense.amount)}</td>
                <td>
                    <button class="delete-btn"
                        onclick="deleteExpense('${expense.id}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

function renderCategorySummary() {
    let summary = document.getElementById("categorySummary");

    let categoryTotals = {};

    expenses.forEach(function (expense) {
        if (!categoryTotals[expense.category]) {
            categoryTotals[expense.category] = 0;
        }

        categoryTotals[expense.category] += expense.amount;
    });

    let totalExpenses = expenses.reduce(function (total, expense) {
        return total + expense.amount;
    }, 0);

    let categories = Object.keys(categoryTotals);

    if (categories.length === 0) {
        summary.textContent = "Add expenses to view category-wise spending.";
        return;
    }

    summary.innerHTML = categories.map(function (category) {
        let amount = categoryTotals[category];

        let percentage = totalExpenses > 0
            ? (amount / totalExpenses) * 100
            : 0;

        return `
            <div class="category-item">
                <div class="category-heading">
                    <span>${escapeHTML(category)}</span>
                    <span>${formatMoney(amount)} (${percentage.toFixed(1)}%)</span>
                </div>
                <div class="category-track">
                    <div class="category-fill"
                        style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
    }).join("");
}

function initializeApp() {
    let dateInput = document.getElementById("expenseDate");

    dateInput.value = new Date().toLocaleDateString("en-CA");

    renderApp();
}

initializeApp();
