/*
6 kyu
Break camelCase

https://www.codewars.com/kata/5208f99aee097e6552000148
*/

function solution(str) {
    let res = str[0] + '';
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) res += ' ' + str[i];
        else res += str[i];
    }
    return res;
}