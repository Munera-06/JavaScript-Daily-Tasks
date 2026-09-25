function countCharacters() {
    let str = document.getElementById("text").value;
    let count = str.length;

    document.getElementById("result").innerHTML = "Character Count: " + count;
}