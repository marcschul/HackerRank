'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // DATA
    // output === string
    // input === string
    // input time eqals hh::mm:ssHR
    // returns time format equals hh:mm:ss
    // max = 12:59:59
    
    // LOGIC
    // search for string 'PM' and 'AM'
        // if found, remove string 'PM' or 'AM'
            // if PM found, 
                // format 12:00:00 + time
            // if AM found, format 00:00:00 + time
    // convert all to seconds, hhx60x60 + mmx60 + ss
    
    // 12am = 0hh
    // 1am = 1hh
    // 11am = 11hh
    // 12pm = 12hh
    // 1pm = 13hh
    // 11pm = 23hh
    
    let hh = 0;
    let mm = 0;
    let ss = 0;
    
    if (s[8]+s[9] === 'AM' && s[0]+s[1] === '12') {
        hh = '00'
    }
    
    if (s[8]+s[9] === 'AM' && s[0]+s[1] !== '12') {
        hh = s[0]+s[1];
    }
    
    if (s[8]+s[9] === 'PM' && s[0]+s[1] === '12') {
        hh = 12;
    }
    
    if (s[8]+s[9] === 'PM' && s[0]+s[1] !== '12') {
        hh = JSON.stringify(12+Number(s[0]+s[1]));
    }
    
    const result = hh + s.slice(2, 8);
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
