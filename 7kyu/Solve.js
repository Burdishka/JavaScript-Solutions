/*
7 kyu
Simple string reversal

https://www.codewars.com/kata/5a71939d373c2e634200008e
*/

function solve(str) {
    let string = str.replace(/[' ']/g, '').split('').reverse();
    for (let i in str) {
        if (str[i] === ' ') string.splice(i, 0, ' ');
    }
    return string.join('');
}