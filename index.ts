console.log('CLI CALCULATOR :-\n');

import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(): void {
    const firstStr: string = question('Enter First number: ');
    const operator: string = question('Enter Operator: ');
    const secondStr: string = question('Enter Second number: ');

    const validInput: boolean = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);

    if (validInput) {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(`Result: ${result}`);

    } else {
        console.error('\n**********Invalid Input**********\n');
        main();
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        default:
            return 0;
    }
}

function isOperator(operator: string): boolean {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

// Convert string to number so we can use it in the calculation without geeting NAN error
function isNumber(str: string): boolean {
    const num = parseInt(str);
    const isNum: boolean = !isNaN(num);
    return isNum;
}

main();