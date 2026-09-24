function findSmallest() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    let smallest;

    if (num1 < num2 && num1 < num3) {
        smallest = num1;
    } else if (num2 < num1 && num2 < num3) {
        smallest = num2;
    } else {
        smallest = num3;
    }

    document.getElementById("result").innerHTML = "Smallest Number: " + smallest;
}