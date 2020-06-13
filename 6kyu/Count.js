/*
6 kyu
Count characters in your string

https://www.codewars.com/kata/52efefcbcdf57161d4000091
*/

function count(str) {
    let obj = {};
    for (let i of str) {
        if (obj[i]) obj[i]++;
        else obj[i] = 1;
    }
    return obj;
}