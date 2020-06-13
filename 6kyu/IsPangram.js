/*
6 kyu
Detect Pangram

https://www.codewars.com/kata/545cedaa9943f7fe7b000048
*/

function isPangram(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    string = string.toLowerCase();
    return alphabet.split('').every(el => string.includes(el));
}