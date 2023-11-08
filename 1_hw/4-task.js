const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function is_prime(n){
    if(n <= 1){
        return false;
    }
    if(n <= 3 && n > 1){
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    else if (n % 2 == 0) {
        
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    
    return true;
    
}


rl.question("Enter number: ", function(userInput) {
    const userNumber = parseInt(userInput);

    if (!isNaN(userNumber)) { 
        const result = is_prime(userNumber);

        console.log("Result: " + result);
    } else {
        console.log("Wrong input");
    }

    rl.close();
});