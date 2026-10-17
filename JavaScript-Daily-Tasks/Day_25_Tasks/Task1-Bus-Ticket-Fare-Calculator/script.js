function calculateFare() {
    let passenger = document.getElementById("passenger").value.trim();
    let distance = Number(document.getElementById("distance").value);
    let count = Number(document.getElementById("count").value);
    let passengerType = document.getElementById("passengerType").value;
    let busType = document.getElementById("busType").value;
    let result = document.getElementById("result");

    if (passenger === "" ||
        document.getElementById("distance").value === "" ||
        document.getElementById("count").value === "" ||
        passengerType === "" || busType === "") {
        result.innerHTML = "Please fill all the fields.";
        return;
    }

    if (distance <= 0 || count <= 0 ||
        !Number.isInteger(count)) {
        result.innerHTML =
            "Enter a valid distance and passenger count.";
        return;
    }

    let rate = 0;

    if (busType === "ordinary") {
        rate = 1.5;
    } else if (busType === "express") {
        rate = 2.5;
    } else {
        rate = 4;
    }

    let farePerPerson = distance * rate;
    let discount = 0;

    if (passengerType === "child") {
        discount = farePerPerson * 0.50;
    } else if (passengerType === "senior") {
        discount = farePerPerson * 0.30;
    }

    let finalFarePerPerson = farePerPerson - discount;
    let totalFare = finalFarePerPerson * count;

    result.innerHTML =
        "<b>Bus Ticket Details</b><br>" +
        "Passenger: " + passenger + "<br>" +
        "Distance: " + distance + " km<br>" +
        "Bus Type: " + busType.toUpperCase() + "<br>" +
        "Passengers: " + count + "<br>" +
        "Fare Per Person: ₹" + farePerPerson.toFixed(2) + "<br>" +
        "Discount Per Person: ₹" + discount.toFixed(2) + "<br>" +
        "Final Fare Per Person: ₹" +
        finalFarePerPerson.toFixed(2) + "<br>" +
        "<b>Total Ticket Fare: ₹" + totalFare.toFixed(2) + "</b>";
}
