/*
6 kyu
Custom sort function

https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe
*/

function sort(items) {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (items[j] > items[j + 1]) {
                let temp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = temp;
            }
        }
    }
    return items;
}