function findUnique() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",");
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i].trim())) {
            unique.push(arr[i].trim());
        }
    }

    document.getElementById("result").innerHTML = "Unique Elements: " + unique.join(", ");
}