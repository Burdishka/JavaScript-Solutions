/*
6 kyu
Number Zoo Patrol

https://www.codewars.com/kata/5276c18121e20900c0000235
*/

function findNumber(array) {
    if (!array.includes(1)) return 1;
    let sum = array.reduce((a, b) => a + b);
    let n = array.length + 1;
    let sum2 = n * (n + 1) / 2;
    return sum2 - sum;
}