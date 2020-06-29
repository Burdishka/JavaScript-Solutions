/*
6 kyu
Time-like string format

https://www.codewars.com/kata/51e000d070fe4414000003f0
*/

function solution(hour) {
    hour = String(hour).split('').reverse();
    if (hour.length < 3 || hour.length > 4) throw Error('Exception message');
    let time = '';
    for (let i in hour){
        if (i === '1') time += hour[i] + ':';
        else time += hour[i];
    }
    time = time.split('').reverse().join('');
    return time;
}