/*
6 kyu
Length of missing array

https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611
*/

function getLengthOfMissingArray(array) {
    let arr = [];
    for (let i in array) {
        if (array[i] == null || array[i].length === 0) return 0;
        else arr.push(array[i].length);
    }
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) return arr[i - 1] + 1;
    }
    return 0;
}