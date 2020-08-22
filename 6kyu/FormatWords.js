/*
6 kyu
Format words into a sentence

https://www.codewars.com/kata/51689e27fe9a00b126000004
*/

function formatWords(words) {
    if (words == null) return '';
    words = words.filter(el => el !== '');
    words = words.filter(el => el != null);
    if (words.length > 1) words.splice(words.length - 1, 0, ' and ');
    else if (words.length === 1) return words[0];
    else return '';
    let str = '';
    for (let i = 0; i <= words.length - 1; i++) {
        if (words[i + 1] === ' and ') return str += words[i] + words[i + 1] + words[i + 2];
        str += words[i] + ', '
    }
}