function findLargest() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if (num1 > num2) {
        document.getElementById("result").innerHTML = "Largest Number: " + num1;
    } else {
        document.getElementById("result").innerHTML = "Largest Number: " + num2;
    }
}