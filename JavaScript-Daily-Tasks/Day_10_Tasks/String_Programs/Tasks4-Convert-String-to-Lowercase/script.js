function convertLowercase() {
    let str = document.getElementById("text").value;
    let result = str.toLowerCase();

    document.getElementById("result").innerHTML = result;
}