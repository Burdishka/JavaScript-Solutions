/*
6 kyu
Character with longest consecutive repetition

https://www.codewars.com/kata/586d6cefbcc21eed7a001155
*/

function longestRepetition(s) {
    if (s === '') return ['', 0];
    let num = 1;
    let sign = s[0];
    let count = 1;
    let letter = s[0];
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === letter) count++;
        else {
            if (count > num) {
                num = count;
                sign = s[i - 1];
            }
            count = 1;
            letter = s[i]
        }
    }
    return [sign, num];
}