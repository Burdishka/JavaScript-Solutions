/*
6 kyu
Tribonacci Sequence

https://www.codewars.com/kata/556deca17c58da83c00002db
*/

function tribonacci(array, n) {
    if (n < 4) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(array[i]);
        }
        return arr;
    }
    else {
        for (let i = 3; i < n; i++) {
            let el = array[i - 3] + array[i - 2] + array[i - 1];
            array.push(el);
        }
        return array;
    }
}