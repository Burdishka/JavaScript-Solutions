/*
6 kyu
Sort sentence pseudo-alphabetically

https://www.codewars.com/kata/52dffa05467ee54b93000712
*/

function sort(s) {
    s = s.replace(/[,!]/g, '').split(' ');
    let s1 = [];
    let s2 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i][0] === s[i][0].toLowerCase()) s1.push(s[i]);
        else s2.push(s[i]);
    }
    s1 = s1.sort();
    s2 = s2.sort().reverse();
    return s1.concat(s2).join(' ');
}