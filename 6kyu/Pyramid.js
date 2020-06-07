/*
6 kyu
Pyramid Array

https://www.codewars.com/kata/515f51d438015969f7000013
*/

function pyramid(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        let arr = [];
        for (let j = 1; j <= i; j++) {
            arr.push(1);
        }
        array.push(arr);
    }
    return array;
}