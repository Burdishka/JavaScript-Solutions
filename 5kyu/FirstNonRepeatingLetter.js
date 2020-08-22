/*
5 kyu
First non-repeating character

https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
*/

function firstNonRepeatingLetter(word) {
    let s = word.toLowerCase();
    for (let i in s) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return word[i];
    }
    return '';
}