/*
6 kyu
Find the missing letter

https://www.codewars.com/kata/5839edaa6754d6fec10000a2
*/

function findMissingLetter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0) === 2) return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
}