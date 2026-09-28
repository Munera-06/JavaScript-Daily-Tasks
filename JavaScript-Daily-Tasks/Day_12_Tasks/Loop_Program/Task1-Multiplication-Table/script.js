function printTable() {
    let num = Number(document.getElementById("number").value);
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("result").innerHTML = result;
}