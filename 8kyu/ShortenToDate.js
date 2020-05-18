/*
8 kyu
Remove the time

https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e
*/

function shortenToDate(str){
    let i = str.indexOf(',');
    return str.slice(0, i);
}