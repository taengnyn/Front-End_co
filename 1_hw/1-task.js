const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function something(items){
    let sum = 0;
    if(items > 0){
        for(let i = 0; i < items; i++){
            if(i % 3 === 0 || i % 5 === 0){
                sum += i;
            }
        }
    }
    return sum;
}

rl.question("Enter number: ", function(userInput) {
    const userNumber = parseInt(userInput);

    if (!isNaN(userNumber)) { 
        const result = something(userNumber);

        console.log("Result: " + result);
    } else {
        console.log("Wrong input");
    }

    rl.close();
});