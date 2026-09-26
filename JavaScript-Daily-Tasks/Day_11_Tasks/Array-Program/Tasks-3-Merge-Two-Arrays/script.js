function mergeArrays() {
    let input1 = document.getElementById("array1").value;
    let input2 = document.getElementById("array2").value;

    let arr1 = input1.split(",");
    let arr2 = input2.split(",");

    let result = arr1.concat(arr2);

    document.getElementById("result").innerHTML = "Merged Array: " + result.join(", ");
}