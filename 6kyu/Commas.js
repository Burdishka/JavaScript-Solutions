/*
6 kyu
Add commas to a number

https://www.codewars.com/kata/56a115cadb39a2faa000001e
*/

function commas(num) {
    num = Math.round(num * 1000) / 1000;
    num = String(num);
    let ind = num.indexOf('.');
    let sub1;
    let sub2;
    if (ind !== -1) {
        sub1 = num.slice(0, ind);
        sub2 = num.slice(ind);
    }
    else {
        sub1 = num;
        sub2 = '';
    }
    sub1 = sub1.split('').reverse();
    let result = '';
    for (let i in sub1) {
        if (i % 3 === 0 && i > 0 && sub1[i] !== '-') result += ',' + sub1[i];
        else result += sub1[i];
    }
    return result.split('').reverse().join('') + sub2;
}