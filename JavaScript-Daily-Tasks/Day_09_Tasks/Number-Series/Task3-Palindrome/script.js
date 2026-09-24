function checkPalindrome() {
    let str = document.getElementById("text").value;
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    if (str == rev) {
        document.getElementById("result").innerHTML = "It is a Palindrome";
    } else {
        document.getElementById("result").innerHTML = "It is not a Palindrome";
    }
}