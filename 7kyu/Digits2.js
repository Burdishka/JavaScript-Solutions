/*
7 kyu
Every possible sum of two digits

https://www.codewars.com/kata/5b4e474305f04bea11000148
*/

function digits(num) {
    num = num.toString().split('');
    num = num.map(el => +el);
    let arr = [];
    for (let i = 0; i < num.length - 1; i++) {
        for (let j = i + 1; j < num.length; j++) {
            arr.push(num[i] + num[j]);
        }
    }
    return arr;
}