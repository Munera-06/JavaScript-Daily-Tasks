function countDigits() {
    let str = document.getElementById("text").value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            count++;
        }
    }

    document.getElementById("result").innerHTML = "Total Digits: " + count;
}