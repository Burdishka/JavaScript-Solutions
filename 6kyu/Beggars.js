/*
6 kyu
English beggars

https://www.codewars.com/kata/59590976838112bfea0000fa
*/

function beggars(values, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(0);
    }
    let k = values.length;
    for (let i = 0; i < k; i++) {
        arr[i % n] += values[i];
    }
    return arr;
}