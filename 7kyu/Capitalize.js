/*
7 kyu
Alternate capitalization

https://www.codewars.com/kata/59cfc000aeb2844d16000075
*/

function capitalize(s) {
    let a = s.split('').map((el, index) => (index % 2 === 0) ? el.toUpperCase() : el).join('');
    let b = s.split('').map((el, index) => (index % 2 === 1) ? el.toUpperCase() : el).join('');
    return [a, b];
}