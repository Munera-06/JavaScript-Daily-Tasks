
function calculateBill() {
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    if (price <= 0 || quantity <= 0 ||
        document.getElementById("price").value === "" ||
        document.getElementById("quantity").value === "") {

        document.getElementById("result").innerHTML =
            "Please enter a valid price and quantity";

    } else {
        let total = price * quantity;

        document.getElementById("result").innerHTML =
            "Product Price: ₹" + price + "<br>" +
            "Quantity: " + quantity + "<br>" +
            "Total Bill: ₹" + total;
    }
}
