function findNumbers() {
    let num = Number(document.getElementById("number").value);
    let result = "";

    for (let i = 1; i <= num; i++) {
        if (i % 5 == 0) {
            result += i + " ";
        }
    }

    document.getElementById("result").innerHTML = "Numbers: " + result;
}