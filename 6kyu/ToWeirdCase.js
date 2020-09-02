/*
6 kyu
WeIrD StRiNg CaSe

https://www.codewars.com/kata/52b757663a95b11b3d00062d
*/

function toWeirdCase(string) {
    let arr = string.split(' ');
    arr = arr.map(el => el.split(''));
    for (let i in arr) {
        for (let j = 0; j <= arr[i].length - 1; j++) {
            if (j % 2 === 0) arr[i][j] = arr[i][j].toUpperCase();
        }
    }
    arr = arr.map(el => el.join(''));
    return arr.join(' ');
}