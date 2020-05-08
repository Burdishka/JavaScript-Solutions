/* 
8 kyu
Contamination #1 -String-

https://www.codewars.com/kata/596fba44963025c878000039
*/

function contamination(text, char){
    if (text === '' || char === '') return '';
    let str = '';
    for (let i in text){
      str += char;
    }
    return str;
  }