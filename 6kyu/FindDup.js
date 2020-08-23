/*
6 kyu
Find The Duplicated Number in a Consecutive Unsorted List - Tougher Version

https://www.codewars.com/kata/558f0553803bc3c4720000af
*/

function findDup(arr) {
    let res = arr.filter((el, index) => arr.lastIndexOf(el) !== index);
    return res[0];
}