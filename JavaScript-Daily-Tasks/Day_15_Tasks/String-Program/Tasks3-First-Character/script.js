function findFirst() {
    let str = document.getElementById("text").value;

    if (str.length > 0) {
        document.getElementById("result").innerHTML =
            "First Character: " + str[0];
    } else {
        document.getElementById("result").innerHTML =
            "Please enter a string";
    }
}