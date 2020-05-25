/*
6 kyu
Which are in?

https://www.codewars.com/kata/550554fd08b86f84fe000a58
*/

function inArray(a1, a2) {
    let c = [];
    for (let i in a1) {
        for (let j in a2) {
            if (a2[j].includes(a1[i])) { c.push(a1[i]); break; }
        }
    }
    let b = [...c].sort();
    return b;
}