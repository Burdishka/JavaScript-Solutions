/*
7 kyu
Rock Off!

https://www.codewars.com/kata/5b097da6c3323ac067000036
*/

function solve(a, b) {
    let c1 = 0;
    let c2 = 0;
    for (let i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
        if (a[i] > b[j]) c1++;
        else if (a[i] < b[j]) c2++;
    }
    if (c1 === c2) return `${c1}, ${c2}: that looks like a "draw"! Rock on!`;
    if (c1 > c2) return `${c1}, ${c2}: Alice made "Kurt" proud!`;
    if (c1 < c2) return `${c1}, ${c2}: Bob made "Jeff" proud!`;
}