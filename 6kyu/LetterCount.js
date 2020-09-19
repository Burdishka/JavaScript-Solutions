/*
6 kyu
Count letters in string

https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
*/

function letterCount(s) {
    let obj = {};
    let str = '';
    for (let i in s) {
        if (!str.includes(s[i])) obj[s[i]] = 1;
        else obj[s[i]]++;
        str += s[i];
    }
    return obj;
}