/*
6 kyu
String average

https://www.codewars.com/kata/5966847f4025872c7d00015b
*/

function averageString(str) {
    if (str === '') return 'n/a';
    let num = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    str = str.split(' ');
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] in num) sum += num[str[i]];
        else return 'n/a';
    }
    let ave = Math.floor(sum / str.length);
    for (let i in num) {
        if (num[i] === ave) return i;
    }
}