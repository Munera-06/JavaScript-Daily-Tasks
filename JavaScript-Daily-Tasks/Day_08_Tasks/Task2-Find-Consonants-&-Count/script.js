function findConsonants() {
    let str = document.getElementById("text").value;
    let consonants = "";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch >= 'a' && ch <= 'z' &&
            ch != 'a' && ch != 'e' && ch != 'i' && ch != 'o' && ch != 'u') {
            consonants += str[i];
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        "Consonants: " + consonants + "<br>Count: " + count;
}