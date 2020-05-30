/*
7 kyu
Find the Capitals

https://www.codewars.com/kata/53573877d5493b4d6e00050c
*/

function capital(c) {
    const arr = [];
    for (let i in c) {
        if (c[i].hasOwnProperty('state')) {
            arr.push(`The capital of ${c[i]['state']} is ${c[i]['capital']}`);
        }
        if (c[i].hasOwnProperty('country')) {
            arr.push(`The capital of ${c[i]['country']} is ${c[i]['capital']}`);
        }
    }
    return arr;
}