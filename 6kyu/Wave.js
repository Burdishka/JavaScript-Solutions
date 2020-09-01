/*
6 kyu
Mexican Wave

https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
*/

function wave(str) {
    let array = [];
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === ' ') continue;
        else {
            let arr = str.split('');
            arr[i] = arr[i].toUpperCase();
            arr = arr.join('');
            array.push(arr);
        }
    }
    return array;
}