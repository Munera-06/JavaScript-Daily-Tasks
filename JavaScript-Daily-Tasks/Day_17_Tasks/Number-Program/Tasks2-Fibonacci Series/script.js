function fibonacci() {
    let n = Number(document.getElementById("number").value);

    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerHTML = result;
}