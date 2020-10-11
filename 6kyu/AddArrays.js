/*
6 kyu
Sum two arrays

https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6
*/

function addArrays(array1, array2) {
    if (array1.length === 0) return array2;
    if (array2.length === 0) return array1;
    let arrayToNumber1 = +(array1.join(''));
    let arrayToNumber2 = +(array2.join(''));
    let arr = arrayToNumber1 + arrayToNumber2 + '';
    let res = arr.split('').map(el => +el);
    if (isNaN(res[0])) {
        res.shift();
        res[0] = -res[0]
    }
    return res;
}