/*
6 kyu
Sum consecutives

https://www.codewars.com/kata/55eeddff3f64c954c2000059
*/

function sumConsecutives(s) {
    let list = [];
    let arr = [];
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] !== s[i + 1]) {
            if (arr.length === 0) {
                list.push([s[i]]);
                continue;
            }
            else {
                arr.push(s[i]);
                list.push(arr);
                arr = [];
                continue;
            }
        }
        else {
            arr.push(s[i]);
        }
    }
    list = list.map(el => el.reduce((a, b) => a + b));
    return list;
}