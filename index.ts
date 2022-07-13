console.log('CLI Calculator :\n');

import { question } from "readline-sync";

function main(): void {
    const firstStr: string = question('Enter First number: ');
    const operator: string = question('Enter Operator: ');
    const secondStr: string = question('Enter Second number: ');


    console.log(firstStr, operator, secondStr);

}

main();