
function withdrawMoney() {
    let balanceInput = document.getElementById("balance").value;
    let amountInput = document.getElementById("amount").value;

    let balance = Number(balanceInput);
    let amount = Number(amountInput);
    let result = document.getElementById("result");

    if (balanceInput === "" || amountInput === "" ||
        balance < 0 || amount <= 0) {
        result.innerHTML = "Please enter valid amounts";
    } else if (amount % 100 !== 0) {
        result.innerHTML = "Enter amount in multiples of ₹100";
    } else if (amount > balance) {
        result.innerHTML = "Insufficient Balance";
    } else {
        balance = balance - amount;

        result.innerHTML =
            "Withdrawal Successful!<br>" +
            "Withdrawn Amount: ₹" + amount + "<br>" +
            "Remaining Balance: ₹" + balance;
    }
}
