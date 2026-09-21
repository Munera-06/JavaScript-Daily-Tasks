function num_value(val) {
    const display = document.getElementById("heading-one");

    if (display.value == "0") {
        display.value = val;
    } else {
        display.value += val;
    }
}

function sc_clear() {
    document.getElementById("heading-one").value = "0";
}

function sc_equal() {
    const display = document.getElementById("heading-one");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}