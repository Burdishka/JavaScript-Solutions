/*
6 kyu
Simple frequency sort

https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
*/

function solve(arr) {
    arr = arr.sort((a, b) => a - b);
    let arr1 = [];
    let arr2 = [];

    for (let i in arr) {
        if (arr[i] !== arr[i - 1]) arr1.push(arr[i]);
    }

    for (let i in arr1) {
        let a = [];
        for (let j in arr) {
            if (arr[j] === arr1[i]) a.push(arr[j]);
        }
        arr2.push(a);
    }
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr2.length - 1; i++) {
            if (arr2[i].length < arr2[i + 1].length) {
                var temp = arr2[i];
                arr2[i] = arr2[i + 1];
                arr2[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    let res = [];
    arr2 = arr2.forEach(el => el.forEach(el => res.push(el)));
    return res;
}