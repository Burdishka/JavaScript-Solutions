/*
6 kyu
Tortoise racing

https://www.codewars.com/kata/55e2adece53b4cdcb900006c
*/

function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let t = g * 3600 / (v2 - v1);
    let h = Math.trunc(t / 3600);
    let rest = t % 3600;
    let m = Math.trunc(rest / 60);
    let s = Math.trunc(rest % 60);
    return [h, m, s];
}