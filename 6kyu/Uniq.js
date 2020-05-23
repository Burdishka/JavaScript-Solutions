/*
6 kyu
uniq (UNIX style)

https://www.codewars.com/kata/52249faee9abb9cefa0001ee
*/

function uniq(a) {
    if (a.length < 2) return a;
    let arr = [a[0]];
    for (let i = 1; i < a.length; i++) {
        if (a[i] !== a[i - 1]) arr.push(a[i]);
    }
    return arr;
}