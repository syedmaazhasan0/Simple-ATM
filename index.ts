#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 12345;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Please Enter  Your Pin",
            type: "number"
        }     
    ]
);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green.italic("Correct Pin Code !!"));
    
   let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw","check balance","fast cash"]
        }
    ]
   );
   
   if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
        ]
    );

     myBalance -= amountAns.amount ;
     console.log(chalk.cyan.underline(`Your remaining balance is ${myBalance}`));
     
    
   } else if (operationAns.operation === "check balance") {
    console.log(chalk.bgBlue("Your balance is: " + myBalance));
    
   } else if (operationAns.operation === "fast cash"){

    let fastCash = await inquirer.prompt(
        [
            {
                name: "fast",
                message: "Please select an option",
                type: "list",
                choices: [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]
            }
        ]
    )
    myBalance-= fastCash.fast
    console.log(`Your remaining balance is ${myBalance}`);
    
   } 

} else{
    console.log(chalk.red.italic("Incorrect pin number"));
    
};