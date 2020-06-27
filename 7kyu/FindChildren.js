/*
7 kyu
Santa's Naughty List

https://www.codewars.com/kata/5a0b4dc2ffe75f72f70000ef
*/

function findChildren(santasList, children) {
    let list = santasList.filter(name => children.find(el => el === name)).sort();
    let newList = list.filter((el, index) => list.indexOf(el) === index);
    return newList;
}