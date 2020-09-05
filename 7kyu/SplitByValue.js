/*
7 kyu
Split By Value

https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc
*/

function splitByValue(k, elements) {
    let res = [];
    for (let i of elements) {
        if (i < k) res.push(i);
    }
    for (let i of elements) {
        if (i >= k) res.push(i);
    }
    return res;
}