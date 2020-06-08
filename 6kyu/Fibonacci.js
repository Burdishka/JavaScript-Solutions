/*
6 kyu
Complete Fibonacci Series

https://www.codewars.com/kata/5239f06d20eeab9deb00049b
*/

function fibonacci(n) {
    let arr = [];
    if (n < 1) return arr;
    arr = [0, 1];
    if (n < 3) return arr[n - 1];
    let f0 = 0, f1 = 1;
    let i = 2;
    while (i < n) {
        let f2 = f0 + f1;
        arr.push(f2);
        f0 = f1;
        f1 = f2;
        i++;
    }
    return arr;
}