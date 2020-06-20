/*
6 kyu
Reverse Vowels In A String

https://www.codewars.com/kata/585db3e8eec141ce9a00008f
*/

function reverseVowels(str) {
    let vowel = 'euioaEUIOA';
    let arr = str.split('').filter(el => vowel.includes(el)).reverse();
    return str.split('').map(el => vowel.includes(el) ? arr.shift() : el).join('');
}