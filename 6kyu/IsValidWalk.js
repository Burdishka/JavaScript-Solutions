/*
6 kyu
Take a Ten Minute Walk

https://www.codewars.com/kata/54da539698b8a2ad76000228
*/

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    let countN = 0;
    let countS = 0;
    let countW = 0;
    let countE = 0;
      for (let i in walk){
        switch(walk[i]){
          case 'n': countN++; break;
          case 's': countS++; break;
          case 'w': countW++; break;
          case 'e': countE++; break;
        }
      }
      return (countN === countS && countW === countE);
  }