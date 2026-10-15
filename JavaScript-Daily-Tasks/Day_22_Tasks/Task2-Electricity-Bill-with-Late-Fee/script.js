
function calculateBill() {
    let unitsInput = document.getElementById("units").value;
    let units = Number(unitsInput);
    let status = document.getElementById("status").value;
    let bill = 0;
    let lateFee = 0;

    if (unitsInput === "" || units < 0) {
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
               (units - 200) * 4;
    }

    if (status === "late") {
        lateFee = bill * 5 / 100;
    }

    let totalBill = bill + lateFee;

    document.getElementById("result").innerHTML =
        "Units Consumed: " + units + "<br>" +
        "Electricity Charge: ₹" + bill.toFixed(2) + "<br>" +
        "Late Fee: ₹" + lateFee.toFixed(2) + "<br>" +
        "Total Bill: ₹" + totalBill.toFixed(2);
}
