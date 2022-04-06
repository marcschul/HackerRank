'use strict';

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
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // DATA
    // -d === fruit falls left of tree
    // +d === right falls right of tree
    // m === apples
    // n === oranges
    // a === apple tree x-coordinates
    // b === orange tree x-coordinates
    // [s, t] === range of house
    // s === left of house
    // t === right of house
    // apples = array of apples, each element is an             x-coordinate
    // oranges = array of oranges, each element is an           x-coordinate
    
    // output
    // [numOfApples, numOfOranges] fell on house
    
    
    // LOGIC
    // applelanding = a + apples[i]
    // 3 + 3 === +x6
    // 3 - 4 === -x1
    // if (applelanding on house) add +1 apple to result array
    // repeat for orange
    // if (value of a + apples[i]
    
    const y0Apples = [];
    const y0Oranges = [];
    const results = [0,0];
    
    for (const apple of apples) {
        y0Apples.push(apple + a);
    }
    
    for (const orange of oranges) {
        y0Oranges.push(b + orange);
    }
    
    for (const apple of y0Apples) {
        if (apple >= s && apple <= t) {
            results[0]++;
        }
    }
    
    for (const orange of y0Oranges) {
        if (orange >= s && orange <= t) {
            results[1]++;
        }
    }
    
    // console.log('a', a);
    // console.log('apples', apples);
    // console.log('y0Apples', y0Apples);
    
    // console.log('b', b);
    // console.log('oranges', oranges);
    // console.log('y0Oranges', y0Oranges);
    
    console.log(`${results[0]}\n${results[1]}`)
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const s = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const a = parseInt(secondMultipleInput[0], 10);

    const b = parseInt(secondMultipleInput[1], 10);

    const thirdMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(thirdMultipleInput[0], 10);

    const n = parseInt(thirdMultipleInput[1], 10);

    const apples = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
