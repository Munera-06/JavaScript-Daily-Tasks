function findCube() {
    let number = Number(document.getElementById("number").value);
    let cube = number * number * number;

    document.getElementById("result").innerHTML = "Cube: " + cube;
}