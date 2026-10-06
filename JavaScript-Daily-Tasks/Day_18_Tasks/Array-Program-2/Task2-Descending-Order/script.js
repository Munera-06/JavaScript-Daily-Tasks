function descending() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",").map(Number);

    arr.sort(function(a, b) {
        return b - a;
    });

    document.getElementById("result").innerHTML = arr.join(", ");
}