/*
6 kyu
Grouped by commas

https://www.codewars.com/kata/5274e122fc75c0943d000148
*/

function groupByCommas(n) {
    n = String(n).split('').reverse();
    let result = '';
    for (let i in n) {
        if (i % 3 === 0 && i > 0) result += ',' + n[i];
        else result += n[i];
    }
    return result.split('').reverse().join('');
}