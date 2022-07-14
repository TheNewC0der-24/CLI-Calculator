console.log('CLI Calculator :\n');

import { question } from "readline-sync";

function main(): void {
    const firstStr: string = question('Enter First number: ');
    const operator: string = question('Enter Operator: ');
    const secondStr: string = question('Enter Second number: ');

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