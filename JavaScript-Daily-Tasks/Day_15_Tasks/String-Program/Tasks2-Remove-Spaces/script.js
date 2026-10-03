function removeSpaces() {
    let str = document.getElementById("text").value;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }

    document.getElementById("result").innerHTML = result;
}