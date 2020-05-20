/*
6 kyu
N-th Fibonacci

https://www.codewars.com/kata/522551eee9abb932420004a0
*/

function nthFibo(n) {
    let f0 = 0;
    let f1 = 1;
    let f2 = f0 + f1;
    if (n === 1) return f0;
    if (n === 2) return f1;
    let i = 3;
    while (i++ <= n) {
        f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
    }
    return f2;
}