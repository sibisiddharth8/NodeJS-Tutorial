const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try{
        const first = await readFilePromise('./randomfile1.txt', 'utf8');
        const second = await readFilePromise('./randomfile2.txt', 'utf8');
        await writeFilePromise(
            './randomfile3.txt',`This is Awesome : ${first} ${second}`
        );
        console.log(first, second);
    } catch (error) {
        console.log(error, 'unable to complete the task');
    };
}

start();