/*
7 kyu
Don't give me five!

https://www.codewars.com/kata/5813d19765d81c592200001a
*/

function dontGiveMeFive(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        i += '';
        if (!i.includes('5')) arr.push(i);
    }
    return arr.length;
}