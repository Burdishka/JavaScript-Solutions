/*
6 kyu
Basics 03: Strings, Numbers and Calculation

https://www.codewars.com/kata/56b5dc75d362eac53d000bc8
*/

function calculateString(s){
    return eval(s.replace(/[^\d+*/.-]/g,'')).toFixed();
}