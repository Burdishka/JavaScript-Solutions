/*
8 kyu
Geometry Basics: Distance between points in 2D

https://www.codewars.com/kata/58dced7b702b805b200000be
*/

function distanceBetweenPoints(a, b) {
    let x1 = a.x;
    let x2 = b.x;
    let y1 = a.y;
    let y2 = b.y;
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }