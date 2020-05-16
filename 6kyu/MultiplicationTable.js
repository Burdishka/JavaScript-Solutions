/*
6 kyu
Multiplication table

https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08
*/

multiplicationTable = function (s) {
    const array = [];
    for (let i = 1; i <= s; i++) {
        const arr = [];
        for (let j = 1; j <= s; j++) {
            arr.push(j * i);
        }
        array.push(arr);
    }
    return array;
}