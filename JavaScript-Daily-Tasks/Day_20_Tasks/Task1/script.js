function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let upper = 0;
    let lower = 0;
    let digit = 0;
    let special = 0;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "A" && password[i] <= "Z") {
            upper++;
        } else if (password[i] >= "a" && password[i] <= "z") {
            lower++;
        } else if (password[i] >= "0" && password[i] <= "9") {
            digit++;
        } else {
            special++;
        }
    }

    if (password.length === 0) {
        result.innerHTML = "Please enter a password";
    } else if (
        password.length >= 8 &&
        upper > 0 &&
        lower > 0 &&
        digit > 0 &&
        special > 0
    ) {
        result.innerHTML = "Strong Password";
    } else if (
        password.length >= 6 &&
        (upper > 0 || lower > 0) &&
        digit > 0
    ) {
        result.innerHTML = "Medium Password";
    } else {
        result.innerHTML = "Weak Password";
    }
}