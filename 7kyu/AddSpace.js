/*
7 kyu
Spacify

https://www.codewars.com/kata/57f8ee485cae443c4d000127
*/

function spacify(s){
    let str = '';
    for (let i in s){
      if (i < s.length -1) str += s[i] + ' ';
      else str += s[i];
    }
    return str;
}