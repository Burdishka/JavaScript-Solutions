/*
6 kyu
Backspaces in string

https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
*/

function cleanString(s) {
    s = s.split('');
    let count = 0;
    for (let i in s) {
        if (s[i] === '#') count++;
    }
    for (let i = 1; i <= count; i++) {
        for (let i in s) {
            if (s[i] === '#') {
                s.splice(i, 1);
                if (i != 0) s.splice(i - 1, 1);
                break;
            }
        }
    }
    return s.join('');
}