

// como transformar um numero em string

let num1 = 1;//number

let num2 = 2.5; // number

let num3 = 10.589649485418;

let num4 = 20;



//num1 +=num2; num1 = num1 + num2; ou seja += estamos pegando o num1 igual a ele mesmo mais o numero que queremos somar


num1 = num1.toString();// transformando um numero em string

console.log (num1.toString()+ num2);// transformando um numero em string e fazendo alguma coisa com essa string

console.log(typeof num1);

console.log(num3.toFixed(2));// mexer com casos decimais

console.log(Number.isInteger(num4)); // usado para identificar se um numero é inteiro ser for inteiro retorna true se não false


let temp = num4 * '5';/*se fosse um + iria fazer a junção dos valores */
console.log(Number.isNaN=(temp)); // para identificar se a conta é um NaN, se for true é NaN se não false



//******************************************************

//Resolvendo problema de imprecisão


let num5 = 0.7;

let num6 = 0.1


num5 += num6;//0.8
num5 += num6;//0.9
num5 += num6;//1.0
num5 += num6;//1.1
num5 += num6;//1.2
num5 += num6;//1.3
num5 += num6;//1.4
num5 += num6;//1.5
num5 += num6;//1.6
num5 += num6;//1.7
num5 += num6;//1.8
num5 += num6;//1.9
num5 += num6;//2.0



num5 = parseFloat(num5.toFixed(2));/*nesse exemplo se quisermos fazer um numero ficar como numero inteiro e duas casas decimais devemos usar o 
parseFloat junto com o toFixed*/

//num5 = ((num5*100) + (num6 * 100) / 100); outra maneira de resolver o problemas

console.log(num5)


//obs quando fazer contas com numero abaixo de zero pode gerar uma imprecisão então isso mostra como resolver para mostrar o valor correto

