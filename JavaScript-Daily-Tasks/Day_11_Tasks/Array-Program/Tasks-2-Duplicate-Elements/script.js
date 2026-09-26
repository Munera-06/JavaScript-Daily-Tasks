function findDuplicates() {
    let input = document.getElementById("numbers").value;
    let arr = input.split(",");
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].trim() == arr[j].trim() && !duplicates.includes(arr[i].trim())) {
                duplicates.push(arr[i].trim());
            }
        }
    }

    if (duplicates.length > 0) {
        document.getElementById("result").innerHTML = "Duplicates: " + duplicates.join(", ");
    } else {
        document.getElementById("result").innerHTML = "No duplicate elements";
    }
}