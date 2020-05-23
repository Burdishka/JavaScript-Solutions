/*
7 kyu
Rock Paper Scissors Lizard Spock

https://www.codewars.com/kata/57d29ccda56edb4187000052
*/

function rpsls(pl1, pl2) {
    let arr = ['Scissors Paper', 'Paper Rock',
        'Rock Lizard',
        'Lizard Spock',
        'Spock Scissors',
        'Scissors Lizard',
        'Lizard Paper',
        'Paper Spock',
        'Spock Rock',
        'Rock Scissors'];

    arr = arr.map(el => el.toLowerCase());

    if (pl1 === pl2) return 'Draw!';
    let str = pl1 + ' ' + pl2;
    return (arr.includes(str)) ? 'Player 1 Won!' : 'Player 2 Won!';
}