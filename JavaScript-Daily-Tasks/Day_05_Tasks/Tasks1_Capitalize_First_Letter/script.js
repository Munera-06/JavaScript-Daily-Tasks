function capitalizeWords() {
    var input = document.getElementById("words").value;
    var words = input.split(" ");

    var result = words.map(word =>
        word[0].toUpperCase() + word.slice(1)
    );

    document.getElementById("result").innerHTML = result.join(" ");
}