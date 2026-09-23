function findVowels() {
    let str = document.getElementById("text").value;
    let vowels = "";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowels += str[i];
            count++;
        }
    }

    document.getElementById("result").innerHTML =
        "Vowels: " + vowels + "<br>Count: " + count;
}