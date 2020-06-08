/*
6 kyu
Split Strings

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
*/

function solution(str) {
    if (str.length % 2) str += '_';
    let arr = [];
    for (let i in str) {
        if (i % 2 === 0) arr.push(str[i]);
        else arr[arr.length - 1] = arr[arr.length - 1] + str[i];
    }
    return arr;
}