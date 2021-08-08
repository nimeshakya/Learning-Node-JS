const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./files/textfile1.txt', 'utf-8');
const second = readFileSync('./files/textfile2.txt', 'utf-8');

// console.log(first);
// console.log(second);

writeFileSync(
    './files/result-sync.txt',
    `Here is the result: \n ${first} \n ${second}`,
    { flag: 'a' }
);

const third = readFileSync('./files/result-sync.txt', 'utf-8');
console.log(third);
