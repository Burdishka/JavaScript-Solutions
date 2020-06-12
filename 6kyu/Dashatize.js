/*
6 kyu
Dashatize it

https://www.codewars.com/kata/58223370aef9fc03fd000071
*/

function dashatize(num) {
    return String(num)
        .split('').map(el => (+el % 2) ? `-${el}-` : el).join('')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}