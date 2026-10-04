function checkStrings() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;

    if (str1 === str2) {
        document.getElementById("result").innerHTML = "Both Strings are Equal";
    } else {
        document.getElementById("result").innerHTML = "Both Strings are Not Equal";
    }
}