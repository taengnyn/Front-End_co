const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function sortNumbers(numbers) {
    const str = numbers.toString().split('');
    const rightOrder = str.sort((a, b) => b - a);
    const result = parseInt(rightOrder.join(''), 10);
  
    return result;
  }


rl.question("Enter numbers: ", function(userInput) {
    const userNumber = parseInt(userInput);

    if (!isNaN(userNumber)) { 
        const res = sortNumbers(userNumber);
        console.log(res);
    } else {
        console.log("Wrong input");
    }

    rl.close();
});



