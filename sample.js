const { readFile, writeFile } = require('fs');
console.log("starting the task!");

readFile('./randomfile1.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./randomfile2.txt', 'utf8', (err, result) => {
        if (err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./randomfile3.txt',
            `here is the result of randomfile1 and randomfile2 ${first}, ${second}`,
            (err, result) =>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log("done with this task!");
            }
        )
    })
} )
console.log("starting next task!")