/*
6 kyu
Are they square 2?

https://www.codewars.com/kata/5697a0d35f754d1592000018
*/

function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

function isSquare(arr) {
    if (arr.length === 0) return undefined;
    let array = flattenDeep(arr);
    return array.every(el => (el ** 0.5) % 1 === 0);
}