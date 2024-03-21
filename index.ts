#!  /usr/bin/env node

//shebang

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber"},
    { message: "Enter second number", type: "number", name: "secondNumber"},
    { message: "select one of the operaters to perfotrm action",
type: "list", 
name: "operater",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);

//condional statement:
if (answer.operater === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}

   else if (answer.operater === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
}

   else if (answer.operater === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber);
}
   
if (answer.operater === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}

    
else{
    console.log("please select valid operater")
}



