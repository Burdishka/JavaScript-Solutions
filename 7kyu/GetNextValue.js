/*
7 kyu
Alternating between three values

https://www.codewars.com/kata/596776fbb4f24d0d82000141
*/

function f(x, obj) {
    let arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x && arr[i] !== arr[arr.length - 1]) return arr[i + 1];
    }
    return arr[0]
}