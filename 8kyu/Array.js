/*
8 kyu
Remove First and Last Character Part Two

https://www.codewars.com/kata/570597e258b58f6edc00230d
*/

function array(arr) {
    arr = arr.split(',');
    if (arr.length < 3) return null;
    let str = arr[1];
    for (let i = 2; i < arr.length - 1; i++) {
        str += ' ' + arr[i];
    }
    return str;
}