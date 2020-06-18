/*
7 kyu
What is type of variable?

https://www.codewars.com/kata/57293671c98f77e84b000065
*/

function type(value) {
    let res = {}.toString.call(value).slice(1, -1).split(' ');
    return res[1].toLowerCase();
}