/*
6 kyu
The nth smallest integer


*/

function nthSmallest(arr, n) {
    let array = [...new Set(arr)];
    array.sort((a, b) => a - b);
    if (array.length <= n - 1) return null;
    return array[n - 1];
}