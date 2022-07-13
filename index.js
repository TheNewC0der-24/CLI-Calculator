"use strict";
exports.__esModule = true;
console.log('CLI Calculator :\n');
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter First number: ');
    var operator = (0, readline_sync_1.question)('Enter Operator: ');
    var secondStr = (0, readline_sync_1.question)('Enter Second number: ');
    console.log(firstStr, operator, secondStr);
}
main();
