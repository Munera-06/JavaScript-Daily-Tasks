function countWords() {
    let str = document.getElementById("text").value;
    let words = str.trim().split(" ");
    let count = words.length;

    document.getElementById("result").innerHTML = "Word Count: " + count;
}