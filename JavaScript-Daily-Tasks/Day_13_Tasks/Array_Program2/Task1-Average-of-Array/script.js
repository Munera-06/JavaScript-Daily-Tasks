function findAverage() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }

    let average = sum / arr.length;

    document.getElementById("result").innerHTML = "Average: " + average;
}