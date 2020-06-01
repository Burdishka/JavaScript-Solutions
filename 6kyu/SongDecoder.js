/*
6 kyu
Dubstep

https://www.codewars.com/kata/551dc350bf4e526099000ae5
*/

function songDecoder(song) {
    let res = song.split('WUB').join(' ');
    let str = '';
    for (let i = 0; i < res.length; i++) {
        if (res[i] === res[i - 1] && res[i] === ' ') str += '';
        else str += res[i];
    }
    return str.trim();
}