function convertUppercase() {
    let str = document.getElementById("text").value;
    let result = str.toUpperCase();

    document.getElementById("result").innerHTML = result;
}