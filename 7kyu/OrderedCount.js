/*
7 kyu
Ordered Count of Characters

https://www.codewars.com/kata/57a6633153ba33189e000074
*/

var orderedCount = function (text) {
    let str = '';
    for (let i of text) {
        if (!str.includes(i)) str += i;
    }
    let array = [];
    let count;
    for (let j of str) {
        count = 0;
        for (let k of text) {
            if (j === k) count++;
        }
        array.push([j, count]);
    }
    return array;
}