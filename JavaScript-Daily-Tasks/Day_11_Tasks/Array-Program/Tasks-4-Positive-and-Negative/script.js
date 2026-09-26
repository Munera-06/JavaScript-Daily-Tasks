function separateNumbers() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",");

    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i]);

        if (number >= 0) {
            positive.push(number);
        } else {
            negative.push(number);
        }
    }

    document.getElementById("result").innerHTML =
        "Positive: " + positive.join(", ") + "<br>" +
        "Negative: " + negative.join(", ");
}