/*
6 kyu
Split and then add both sides of an array together

https://www.codewars.com/kata/5946a0a64a2c5b596500019a
*/

function splitAndAdd(arr, c) {
    if (arr.length === 1) return arr;
    for (let i = 1; i <= c; i++) {
        if (arr.length % 2) arr.unshift(0);
        let n = Math.trunc(arr.length / 2);
        let arr1 = arr.slice(0, n);
        let arr2 = arr.slice(n);
        let arr3 = [];
        for (let j = arr1.length - 1; j >= 0; j--) {
            arr3.unshift(arr2[j] + arr1[j]);
        }
        arr = arr3;
    }
    return arr;
}