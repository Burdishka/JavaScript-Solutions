/*
6 kyu
Unique In Order

https://www.codewars.com/kata/54e6533c92449cc251001667
*/

function uniqueInOrder(iterable) {
    const arr = [];
    for (let i in iterable) {
        if (iterable[i] !== arr[arr.length - 1]) arr.push(iterable[i]);
    }
    return arr;
}