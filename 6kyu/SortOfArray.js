/*
6 kyu
Sort odd and even numbers in different order

https://www.codewars.com/kata/5a1cb5406975987dd9000028
*/

function sortArray(array) {
    let odd = array.filter(el => el % 2 === 1).sort((a, b) => a - b);
    let even = array.filter(el => el % 2 === 0).sort((a, b) => b - a);
    return array.map(el => (el % 2) ? odd.shift() : even.shift());
}