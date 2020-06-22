/*
6 kyu
Matrix Addition

https://www.codewars.com/kata/526233aefd4764272800036f
*/

function matrixAddition(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        let arr = [];
        for (let j = 0; j < a[i].length; j++) {
            arr.push(a[i][j] + b[i][j]);
        }
        res.push(arr);
    }
    return res;
}