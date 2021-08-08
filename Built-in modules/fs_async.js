const { readFile, writeFile } = require('fs');

readFile('./files/textfile1.txt', 'utf-8', (err, result) => {
    if (err) console.log(err);
    const first = result;

    readFile('./files/textfile2.txt', 'utf-8', (err, result) => {
        if (err) console.log(err);
        const second = result;

        writeFile(
            './files/result-async.txt',
            `Here is the result: \n${first}\n${second}`,
            (err, result) => {
                if (err) console.log(err);
                // console.log(result);
            }
        );
    });
});

readFile('./files/result-async.txt', 'utf-8', (err, result) => {
    if (err) console.log(err);
    console.log(result);
});
