function findSum() {
    let num = Number(document.getElementById("number").value);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    document.getElementById("result").innerHTML = "Sum: " + sum;
}