/*
6 kyu
Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

https://www.codewars.com/kata/58381907f8ac48ae070000de
*/

function isLanguageDiverse(list) {
    let obj = {};
    for (let i in list) {
        for (let j in list[i]) {
            if (j === 'language') {
                if (!obj[list[i][j]]) obj[list[i][j]] = 1;
                else obj[list[i][j]]++;
            }
        }
    }
    let arr = Object.values(obj);
    for (let i in arr) {
        for (let j in arr) {
            if (arr[i] / arr[j] <= 2);
            else return false;
        }
    }
    return true;
}