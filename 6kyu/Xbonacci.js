/*
6 kyu
Fibonacci, Tribonacci and friends

https://www.codewars.com/kata/556e0fccc392c527f20000c5
*/

function Xbonacci(signature, n) {
    let k = signature.length;
    if (n < signature.length) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(signature[i]);
        }
        return arr;
    } else {
        for (let i = signature.length + 1; i <= n; i++) {
            let el = 0;
            for (let j = 1; j <= k; j++) {
                el += signature[signature.length - j];
            }
            signature.push(el);
        }
        return signature;
    }
}