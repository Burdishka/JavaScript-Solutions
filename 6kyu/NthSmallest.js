/*
6 kyu
The nth smallest integer

https://www.codewars.com/kata/57a03b8872292dd851000069
*/

function nthSmallest(arr, n) {
    let array = [...new Set(arr)];
    array.sort((a, b) => a - b);
    if (array.length <= n - 1) return null;
    return array[n - 1];
}