function countNumbers() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);

    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    document.getElementById("result").innerHTML =
        "Even Numbers: " + even + "<br>" +
        "Odd Numbers: " + odd;
}