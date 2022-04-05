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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
        // DATA
    // input type = array 
    // input range = 0-100
    // input first index = length of array
    // input after first index = array of num representing grades
    // output does not include array length as element
    // output grade numbers, rounded if conditions are meet
    // array length between 1 - 60
    
    // LOGIC
    // grades < 40, no not round
    // grades >= 40, either round or do not round
        // if grade difference is less than 3, round up
            // else do not round
    
    const results = [];
    
    for (const grade of grades) {
        if (grade < 38) {
            results.push(grade);
            continue;
        }
        
        const gradeDivideBy5 = grade % 5;
        
        if (gradeDivideBy5 < 3) {
            // do not round to 5
            results.push(grade);
            // break iteration
            continue;
        }
        
        // round up to closet division of 5
        // 74-> 75
        
        const addNum = 5 - gradeDivideBy5;
        const roundedGrade = grade + addNum;
        results.push(roundedGrade);
    }

    return results;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
