/*
6 kyu
Encrypt this!

https://www.codewars.com/kata/5848565e273af816fb000449
*/

var encryptThis = function (str) {
    str = str.split(' ');
    for (let i in str) {
        let str1 = str[i][0].charCodeAt(0);
        let str2 = str[i].slice(1);
        str2 = str2.split('');
        let a = str2[0];
        str2[0] = str2[str2.length - 1];
        str2[str2.length - 1] = a;
        str2 = str2.join('');
        str[i] = str1 + str2;
    }
    return str.join(' ');
}