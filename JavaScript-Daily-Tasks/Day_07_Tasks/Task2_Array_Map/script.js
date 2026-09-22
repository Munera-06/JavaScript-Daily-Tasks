function showArray() {
    var input = document.getElementById("arrayInput").value;
    var arr = input.split(",");
    var text = "";

    arr.map(function(value, index) {
        text = text + value.trim() + index + "<br>";
    });

    document.getElementById("result").innerHTML = text;
}