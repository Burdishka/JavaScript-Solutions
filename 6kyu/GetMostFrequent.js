/*
6 kyu
Find the most frequently occurring elements in arrays

https://www.codewars.com/kata/578b44a47c77f5a1bd000011
*/

function getMostFrequent(json) {
    let arr = json['temperature'];
    let array = [];
    let countEl = 0;
    let count = 0;
    let el;
    for (let k = 0; k < arr.length; k++) {
        for (let i = 0; i < arr[k].length; i++) {
            for (let j = 0; j < arr[k].length; j++) {
                if (arr[k][i] === arr[k][j]) count++;
            }
            if (count >= countEl) {
                countEl = count;
                el = arr[k][i];
            }
            count = 0;
        }
        countEl = 0;
        array.push(el);
    }
    return array;
}