/*
8 kyu
Smallest unused ID

https://www.codewars.com/kata/55eea63119278d571d00006a
*/

function nextId(ids) {
    ids = [...new Set(ids)].sort((a, b) => a - b);
    if (!ids.includes(0)) return 0;
    if (ids.length - 1 === ids[ids.length - 1]) return ids[ids.length - 1] + 1;
    for (let i = 0; i <= ids.length - 1; i++) {
        if (ids[i] + 1 !== ids[i + 1]) return ids[i] + 1;
    }
}