/*
4 kyu
Human readable duration format

https://www.codewars.com/kata/52742f58faf5485cae000b9a
*/

function formatDuration(s) {
    if (s === 0) return 'now';
    let str = '';
    let y = 0;
    let d = 0;
    let h = 0;
    let m = 0;
    if (s >= 31536000) {
        y = Math.trunc(s / 31536000);
        s = s % 31536000;
        if (s === 0) str = (y === 1) ? str + '1 year' : str + `${y} years`;
        else str = (y === 1) ? str + '1 year, ' : str + `${y} years, `;
    }
    if (s >= 86400) {
        d = Math.trunc(s / 86400);
        s = s % 86400;
        if (s === 0) str = (d === 1) ? str + '1 day' : str + `${d} days`;
        else str = (d === 1) ? str + '1 day, ' : str + `${d} days, `;
    }
    if (s >= 3600) {
        h = Math.trunc(s / 3600);
        s = s % 3600;
        if (s === 0) str = (h === 1) ? str + '1 hour' : str + `${h} hours`;
        else if (s % 60) str = (h === 1) ? str + '1 hour, ' : str + `${h} hours, `;
        else str = (h === 1) ? str + '1 hour and ' : str + `${h} hours and `;
    }
    if (s >= 60) {
        m = Math.trunc(s / 60);
        s = s % 60;
        if (s === 0) str = (m === 1) ? str + '1 minute' : str + `${m} minutes`;
        else str = (m === 1) ? str + '1 minute and ' : str + `${m} minutes and `;
    }
    if (s === 0);
    else str = (s > 1) ? str + `${s}` + ' seconds' : str + `${s}` + ' second';
    return str;
}