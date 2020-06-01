/*
7 kyu
Isograms

https://www.codewars.com/kata/54ba84be607a92aa900000f1
*/

function isIsogram(str) {
    str = str.toLowerCase();
    for (let i of str) {
        let count = 0;
        for (let j of str) {
            if (i === j) count++;
        }
        if (count > 1) return false;
    }
    return true;
}