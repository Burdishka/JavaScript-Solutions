/*
6 kyu
Arabian String

https://www.codewars.com/kata/525821ce8e7b0d240b002615
*/

function camelize(str) {
    str = str.toLowerCase().match(/[a-z0-9]+/gi);
    str = str.map(el => el[0].toUpperCase() + el.slice(1)).join('');
    return str;
}