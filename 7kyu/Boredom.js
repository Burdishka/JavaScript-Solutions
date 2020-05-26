/*
7 kyu
The Office II - Boredom Score

https://www.codewars.com/kata/57ed4cef7b45ef8774000014
*/

function boredom(staff) {
    let obj = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25,
    }
    let sum = 0;
    for (let i in staff) {
        if (obj.hasOwnProperty(staff[i])) sum += obj[staff[i]];
    }
    return (sum <= 80) ? 'kill me now' : (sum < 100) ? 'i can handle this' : 'party time!!';
}