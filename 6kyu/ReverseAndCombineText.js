/*
6 kyu
Basics 06: Reversing and Combining Text

https://www.codewars.com/kata/56b861671d36bb0aa8000819
*/

function reverse_and_combine_text(str) {
    str = str.split(' ');
    while (str.length !== 1) {
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].split('').reverse().join('');
        }
        let str2 = [];
        if (str.length % 2) str.push('');
        for (let i = 0; i < str.length; i += 2) {
            str2.push(str[i] + str[i + 1]);
        }
        str = str2;
    }
    return str[0];
}