/*
6 kyu
Build Tower

https://www.codewars.com/kata/576757b1df89ecf5bd00073b
*/

function towerBuilder(n) {
    let arr = [];
    let k = 1;
    let str = '';
    let p;
    let a = n;
    for (let i = 1; i <= n; i++) {
        p = (a * 2 - 2) / 2;
        str = ' '.repeat(p) + '*'.repeat(k) + ' '.repeat(p);
        arr.push(str);
        k += 2;
        a--;
    }
    return arr;
}