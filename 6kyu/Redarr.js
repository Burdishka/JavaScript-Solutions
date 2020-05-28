/*
6 kyu
TV channels

https://www.codewars.com/kata/5836dce6966f8d1d43000007
*/

function redarr(arr) {
    arr = arr.sort();
    let obj = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            obj[count] = arr[i];
            count++;
        }
    }
    return obj;
}