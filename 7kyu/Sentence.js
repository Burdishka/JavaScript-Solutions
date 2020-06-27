/*
7 kyu
String Reordering

https://www.codewars.com/kata/5b047875de4c7f9af800011b
*/

function sentence(list) {
    return list.map(el => Object.entries(el)[0])
        .sort((a, b) => a[0] - b[0])
        .map(el => el[1])
        .join(' ');
}