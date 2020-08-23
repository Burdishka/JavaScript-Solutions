/*
6 kyu
Organise duplicate numbers in list

https://www.codewars.com/kata/5884b6550785f7c58f000047
*/

function group(arr) {
    let a = [...new Set(arr)];
    let res = [];
    for (let i in a) {
        let el = [];
        for (let j in arr) {
            if (a[i] === arr[j]) el.push(arr[j])
        }
        res.push(el)
    }
    return res;
}