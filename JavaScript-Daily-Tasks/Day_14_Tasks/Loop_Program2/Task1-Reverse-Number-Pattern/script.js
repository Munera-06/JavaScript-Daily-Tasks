function printPattern() {
    let num = Number(document.getElementById("number").value);
    let result = "";

    for (let i = num; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            result += j + " ";
        }
        result += "<br>";
    }

    document.getElementById("result").innerHTML = result;
}