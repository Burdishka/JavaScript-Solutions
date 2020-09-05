/*
6 kyu
Are we alternate?

https://www.codewars.com/kata/59325dc15dbb44b2440000af
*/

function isAlt(word) {
    if (word.length < 2) return true;
    let str = 'aeiou';
    if (str.includes(word[0])) {
        for (let i in word) {
            if (i % 2 === 0) {
                if (str.includes(word[i]));
                else return false;
            } else {
                if (!str.includes(word[i]));
                else return false;
            }
        }
    } else {
        for (let i in word) {
            if (i % 2 === 1) {
                if (str.includes(word[i]));
                else return false;
            } else {
                if (!str.includes(word[i]));
                else return false;
            }
        }
    }
    return true;
}