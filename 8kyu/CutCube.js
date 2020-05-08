/*
8 kyu
Training JS #34: methods of Math---pow() sqrt() and cbrt()

https://www.codewars.com/kata/5733f948d780e27df6000e33
*/

function cutCube(v,n){
    if (Math.cbrt(n) % 1 !== 0) return false;
    else return (Math.cbrt(v / n) % 1 === 0);
  }