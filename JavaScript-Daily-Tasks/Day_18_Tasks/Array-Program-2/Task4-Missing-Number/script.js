function findMissing() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);

    let n = arr.length + 1;

    let total = n * (n + 1) / 2;

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let missing = total - sum;

    document.getElementById("result").innerHTML =
        "Missing Number: " + missing;
}