/*
8 kyu
repeatIt

https://www.codewars.com/kata/557af9418895e44de7000053
*/

var repeatIt = function (str, n) {
    if (typeof str !== 'string') return "Not a string";
    else return str.repeat(n);
}