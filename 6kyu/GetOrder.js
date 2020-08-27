/*
6 kyu
New Cashier Does Not Know About Space or Shift

https://www.codewars.com/kata/5d23d89906f92a00267bb83d
*/

function getOrder(str) {
    let arr = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke'];
    for (let i of arr) {
        let re = new RegExp(`${i}`, 'g')
        str = str.replace(re, i + ' ');
    }
    str = str.trim();
    let res = [];
    str = str.split(' ');
    for (let i of arr) {
        for (let j of str) {
            if (i === j) res.push(i[0].toUpperCase() + i.slice(1));
        }
    }
    return res.join(' ');
}