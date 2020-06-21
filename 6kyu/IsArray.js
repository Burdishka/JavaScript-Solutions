/*
6 kyu
Array.isArray

https://www.codewars.com/kata/525a4cab1650d76b8000084d
*/

function isArray(arr) {
    return {}.toString.call(arr) === '[object Array]';
}