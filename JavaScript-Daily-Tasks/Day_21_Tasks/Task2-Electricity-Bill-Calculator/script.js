function calculateBill() {
    let units = Number(document.getElementById("units").value);
    let bill = 0;

    if (document.getElementById("units").value === "" || units < 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid units";
        return;
    }

    if (units <= 100) {
        bill = units * 1.50;
    } else if (units <= 200) {
        bill = (100 * 1.50) + (units - 100) * 2.50;
    } else {
        bill = (100 * 1.50) + (100 * 2.50) +
               (units - 200) * 4.00;
    }

    document.getElementById("result").innerHTML =
        "Units Consumed: " + units + "<br>" +
        "Electricity Bill: ₹" + bill.toFixed(2);
}
