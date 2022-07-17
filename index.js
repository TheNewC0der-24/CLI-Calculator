"use strict";
exports.__esModule = true;
console.log('CLI CALCULATOR :-\n');
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter First number: ');
    var operator = (0, readline_sync_1.question)('Enter Operator: ');
    var secondStr = (0, readline_sync_1.question)('Enter Second number: ');
    var validInput = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (validInput) {
        console.log('\n**********Is Valid**********\n');
        // const firstNum: number = parseInt(firstStr);
        // const secondNum: number = parseInt(secondStr);
        // const result = calculate(firstStr, operator, secondStr);
    }
    else {
        console.error('\n**********Invalid Input**********\n');
    }
}
function isOperator(operator) {
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
function isNumber(str) {
    var num = parseInt(str);
    var isNum = !isNaN(num);
    return isNum;
}
main();
