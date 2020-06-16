/*
6 kyu
Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

https://www.codewars.com/kata/582887f7d04efdaae3000090
*/

function findSenior(list) {
    let maxAge = Math.max(...list.map(key => key.age));
    return list.filter(obj => obj.age === maxAge);
}