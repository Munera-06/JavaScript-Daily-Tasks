
function generateBill() {
    let ricePrice = Number(document.getElementById("ricePrice").value);
    let riceQty = Number(document.getElementById("riceQty").value);
    let oilPrice = Number(document.getElementById("oilPrice").value);
    let oilQty = Number(document.getElementById("oilQty").value);
    let sugarPrice = Number(document.getElementById("sugarPrice").value);
    let sugarQty = Number(document.getElementById("sugarQty").value);

    let inputs = [
        document.getElementById("ricePrice").value,
        document.getElementById("riceQty").value,
        document.getElementById("oilPrice").value,
        document.getElementById("oilQty").value,
        document.getElementById("sugarPrice").value,
        document.getElementById("sugarQty").value
    ];

    let result = document.getElementById("result");

    if (inputs.some(value => value === "")) {
        result.innerHTML = "Please fill all the fields.";
        return;
    }

    if (ricePrice < 0 || oilPrice < 0 || sugarPrice < 0 ||
        riceQty <= 0 || oilQty <= 0 || sugarQty <= 0) {
        result.innerHTML = "Enter valid prices and quantities.";
        return;
    }

    let riceTotal = ricePrice * riceQty;
    let oilTotal = oilPrice * oilQty;
    let sugarTotal = sugarPrice * sugarQty;

    let subtotal = riceTotal + oilTotal + sugarTotal;
    let discount = 0;

    if (subtotal >= 3000) {
        discount = subtotal * 0.15;
    } else if (subtotal >= 1500) {
        discount = subtotal * 0.10;
    } else if (subtotal >= 500) {
        discount = subtotal * 0.05;
    }

    let amountAfterDiscount = subtotal - discount;
    let gst = amountAfterDiscount * 0.05;
    let finalBill = amountAfterDiscount + gst;

    result.innerHTML =
        "Rice Total: ₹" + riceTotal.toFixed(2) + "<br>" +
        "Oil Total: ₹" + oilTotal.toFixed(2) + "<br>" +
        "Sugar Total: ₹" + sugarTotal.toFixed(2) + "<br>" +
        "Subtotal: ₹" + subtotal.toFixed(2) + "<br>" +
        "Discount: ₹" + discount.toFixed(2) + "<br>" +
        "GST (5%): ₹" + gst.toFixed(2) + "<br>" +
        "<b>Final Bill: ₹" + finalBill.toFixed(2) + "</b>";
}
