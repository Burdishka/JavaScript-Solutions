/*
6 kyu
IQ Test

https://www.codewars.com/kata/552c028c030765286c00007d
*/

function iqTest(numbers) {
    numbers = numbers.split(' ');

    let a = numbers.filter(el => el % 2 === 0);
    if (a.length === 1) return numbers.indexOf(a[0]) + 1;

    let b = numbers.filter(el => el % 2 === 1);
    if (b.length === 1) return numbers.indexOf(b[0]) + 1;
}