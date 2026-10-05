function checkPrime() {
    let num = Number(document.getElementById("number").value);
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        document.getElementById("result").innerHTML = num + " is a Prime Number";
    } else {
        document.getElementById("result").innerHTML = num + " is Not a Prime Number";
    }
}