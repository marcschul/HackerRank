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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    
    // x1 = kango1 start distance
    // v1 = kango1 speed
    
    // x2 = kango2 start distance
    // v2 = kango2 speed
    
    let k1 = x1;
    let k2 = x2;
    
    // kango1 is currently behind kango2
    // kango1 is faster than kango2
    // kango1 will eventually pass kango2
    // if their footprints match same x axis at passing time, return YES
    while (k1 <= k2 && v1 > v2) {
        if (k1 === k2) {
            return 'YES';
        }
        k1 += v1;
        k2 += v2;
    }
    
    // kango2 is currently behind kango1
    // kango2 is faster than kango1
    // kang2 will eventually pass kango2
    // if their footprints match same x axis at passing time, return YES
    while (k2 <= k1 && v2 > v1) {    
        if (v2 > v1) {
            if (k1 === k2) {
                return 'YES';
            }
            k1 += v1;
            k2 += v2;
        }
    }
        
    return 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
