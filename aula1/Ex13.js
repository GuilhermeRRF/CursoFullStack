
//problema

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//minha solução

let letra3 = 'B';
let letra2 = 'C';
let letra1 = 'A';


varA = letra3;

varB = letra2;

varC = letra1;


console.log(varA,varB,varC);


/*

outra resolução

const varATempo = varA;

varA = varB;

varB = varC;

varC = varATemp;

console.log(varA,varB,varC);

*/


/*

resolução moderna


[varA, varB, varC] = [varB, varC, varA]

console.log(varA,varB,varC);

*/
