/*
8 kyu
Name Shuffler

https://www.codewars.com/kata/559ac78160f0be07c200005a
*/

function nameShuffler(str){
    str = str.split(' ');
    let arr = [];
    for (let i in str){
      arr.unshift(str[i]);
    }
    return arr.join(' ');
  }