/*
6 kyu
Sort the odd

https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
*/

function sortArray(array) {
    let even = array.filter(el => el % 2).sort((a, b) => a - b);
    let index = 0;
    for (let i in array) {
        if (array[i] % 2) {
            array[i] = even[index];
            index++;
        }
    }
    return array;
}