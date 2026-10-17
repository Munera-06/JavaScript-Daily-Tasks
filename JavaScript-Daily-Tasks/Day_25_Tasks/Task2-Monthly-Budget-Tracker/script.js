function calculateBudget() {
    let incomeInput = document.getElementById("income").value;
    let foodInput = document.getElementById("food").value;
    let travelInput = document.getElementById("travel").value;
    let rentInput = document.getElementById("rent").value;
    let shoppingInput = document.getElementById("shopping").value;
    let otherInput = document.getElementById("other").value;

    let result = document.getElementById("result");

    let inputs = [
        incomeInput,
        foodInput,
        travelInput,
        rentInput,
        shoppingInput,
        otherInput
    ];

    if (inputs.some(value => value === "")) {
        result.innerHTML = "Please fill all the fields.";
        return;
    }

    let income = Number(incomeInput);
    let food = Number(foodInput);
    let travel = Number(travelInput);
    let rent = Number(rentInput);
    let shopping = Number(shoppingInput);
    let other = Number(otherInput);

    if (income <= 0 || food < 0 || travel < 0 ||
        rent < 0 || shopping < 0 || other < 0) {
        result.innerHTML = "Please enter valid amounts.";
        return;
    }

    let totalExpenses = food + travel + rent + shopping + other;
    let balance = income - totalExpenses;
    let savingsPercentage = (balance / income) * 100;

    let status;

    if (balance < 0) {
        status = "You have exceeded your monthly budget!";
    } else if (balance === 0) {
        status = "You have spent your entire income.";
    } else if (savingsPercentage >= 20) {
        status = "Good! You are saving well.";
    } else {
        status = "Try to reduce your expenses and save more.";
    }

    result.innerHTML =
        "<h3>Monthly Budget Report</h3>" +
        "Monthly Income: ₹" + income.toFixed(2) + "<br>" +
        "Food Expenses: ₹" + food.toFixed(2) + "<br>" +
        "Travel Expenses: ₹" + travel.toFixed(2) + "<br>" +
        "Rent: ₹" + rent.toFixed(2) + "<br>" +
        "Shopping: ₹" + shopping.toFixed(2) + "<br>" +
        "Other Expenses: ₹" + other.toFixed(2) + "<br><br>" +
        "Total Expenses: ₹" + totalExpenses.toFixed(2) + "<br>" +
        "Remaining Balance: ₹" + balance.toFixed(2) + "<br>" +
        "Savings Percentage: " +
        savingsPercentage.toFixed(2) + "%<br>" +
        "<b>Status: " + status + "</b>";
}
