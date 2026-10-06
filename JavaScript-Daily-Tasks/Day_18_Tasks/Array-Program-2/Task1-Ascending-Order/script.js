function ascending() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);

    arr.sort(function(a, b) {
        return a - b;
    });

    document.getElementById("result").innerHTML = arr.join(", ");
}