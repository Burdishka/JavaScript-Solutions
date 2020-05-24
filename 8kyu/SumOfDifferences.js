/*
8 kyu
Sum of differences in array

https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
*/

function sumOfDifferences(arr) {
    if (arr.length < 2) return 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
}