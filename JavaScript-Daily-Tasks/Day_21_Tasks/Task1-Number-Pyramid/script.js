function printPyramid() {
    let n = Number(document.getElementById("number").value);
    let result = "";

    if (n < 1 || n > 20 || !Number.isInteger(n)) {
        document.getElementById("result").innerHTML =
            "Enter a number between 1 and 20";
        return;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = i; j < n; j++) {
            result += "  ";
        }

        for (let j = 1; j <= i; j++) {
            result += j + " ";
        }

        for (let j = i - 1; j >= 1; j--) {
            result += j + " ";
        }

        result += "\n";
    }

    document.getElementById("result").textContent = result;
}
