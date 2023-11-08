const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function highAndLow(numbers){
    const arrayOfNumbers = numbers.split(" ").map(Number);
    console.log(arrayOfNumbers);
    let max = arrayOfNumbers[0];
    let min = arrayOfNumbers[0];

    for(const i in arrayOfNumbers){
        if(numbers[i] > max){
            max = numbers[i];
        }
        if(numbers[i] < min){
            min = numbers[i];
        }
    }

    return console.log(`${max} ${min}`);
}

rl.question("Enter numbers: ", function(userInput) {
    highAndLow(userInput);
    rl.close();
});