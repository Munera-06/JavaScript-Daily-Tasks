function removeElement() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",");
    let remove = document.getElementById("remove").value;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim() != remove) {
            result.push(arr[i].trim());
        }
    }

    document.getElementById("result").innerHTML = "Updated Array: " + result.join(", ");
}