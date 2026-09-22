function reverseString() {
    let str = document.getElementById("text").value;
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    document.getElementById("result").innerHTML = rev;
}