const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function towersOfHanoi(disks) {
    if (disks === 1) {
      return 1;
    } else {
      return (2 ** disks) - 1;
    }
  }
  
rl.question("Enter number of discs: ", function(userInput) {
    const userNumber = parseInt(userInput);

    if (!isNaN(userNumber)) { 
        const result = towersOfHanoi(userNumber);

        console.log("Result: " + result);
    } else {
        console.log("Wrong input");
    }

    rl.close();
});