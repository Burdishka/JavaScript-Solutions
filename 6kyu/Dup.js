/*
6 kyu
String array duplicates

https://www.codewars.com/kata/59f08f89a5e129c543000069
*/

function dup(s) {
    let arr = s.map(el => el.split(''));
    for (let i in arr) {
        for (let j = 1; j <= arr[i].length - 1; j++) {
            if (arr[i][j] === arr[i][j - 1]) {
                arr[i].splice(j, 1);
                j--;
            }
        }
    }
    return arr.map(el => el.join(''));
}