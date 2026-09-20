function findVowels() {
    var str = document.getElementById("text").value;
    var vowels = "";

    for (var i = 0; i < str.length; i++) {
        var ch = str[i].toLowerCase();

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowels += str[i];
        }
    }

    if (vowels == "") {
        document.getElementById("result").innerHTML = "No vowels found";
    } else {
        document.getElementById("result").innerHTML = "Vowels: " + vowels;
    }
}