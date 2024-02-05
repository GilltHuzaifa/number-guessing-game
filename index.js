#! usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue("lets start number guessing game"));
function main() {
    const randomNum = Math.floor(Math.random() * 10);
    inquirer
        .prompt([
        {
            type: "number",
            name: "userguess",
            message: "Write your guess:",
        }
    ])
        .then((answers) => {
        if (answers.userguess == randomNum) {
            console.log(chalk.blue("your answer is right \n you win!"));
        }
        else {
            console.log(chalk.gray.italic("please try again better luck next time!"));
        }
    })
        .catch((error) => {
        if (error.isTtyError) {
        }
        else {
        }
    });
}
main();
