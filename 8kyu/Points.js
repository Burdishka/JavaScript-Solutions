/*
8 kyu
Total amount of points

https://www.codewars.com/kata/5bb904724c47249b10000131
*/

function points(games){
    let count = 0;
      for (let i in games){
        games[i] = games[i].split(':');
        if (+games[i][0] > +games[i][1]) count += 3;
        else if (+games[i][0] === +games[i][1]) count += 1;  
    }
    return count;
  }