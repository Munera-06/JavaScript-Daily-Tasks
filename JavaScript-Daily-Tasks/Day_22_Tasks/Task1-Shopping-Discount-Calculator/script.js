
function calculateDiscount() {
    let amount = Number(document.getElementById("amount").value);
    let discount = 0;

    if (document.getElementById("amount").value === "" || amount <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid amount";
        return;
    }

    if (amount >= 5000) {
        discount = 30;
    } else if (amount >= 3000) {
        discount = 20;
    } else if (amount >= 1000) {
        discount = 10;
    }

    let discountAmount = amount * discount / 100;
    let finalAmount = amount - discountAmount;

    document.getElementById("result").innerHTML =
        "Purchase Amount: Rs: " + amount.toFixed(2) + "<br>" +
        "Discount: " + discount + "%<br>" +
        "Discount Amount: Rs: " + discountAmount.toFixed(2) + "<br>" +
        "Final Bill: ₹" + finalAmount.toFixed(2);
}
