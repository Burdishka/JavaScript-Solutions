/*
7 kyu
Numbers in strings

https://www.codewars.com/kata/59dd2c38f703c4ae5e000014
*/

function solve(s) {
    s = s.replace(/[a-z]/g, ' ').trim().split(' ');
    return Math.max(...s);
}