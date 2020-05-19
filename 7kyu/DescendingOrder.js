/*
7 kyu
Descending Order

https://www.codewars.com/kata/5467e4d82edf8bbf40000155
*/

function descendingOrder(n){
    return +String(n).split('').sort((a, b) => b - a).join('');
}