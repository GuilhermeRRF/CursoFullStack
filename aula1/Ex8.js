

const nome = 'Guilherme';
const idade = 21;
const peso = 50;
const alturaEmMt = 1.75;
let imc = peso / (alturaEmMt * alturaEmMt);/*Formula do imc*/
let anoNascimento=2024-idade;


/*Existem tres maneiras de concatenação utilizando 

1° o "+" onde é necesaario o espaçamento das aspas

2° "," que ja vem com espaço sem precisar deixar o conteudo separdo das aspas pra dar espaço 
e também o metodo mais moderno que é 

3° o uso de de crase: "`" no lugar de parenteses no print e quando formos fazer a concatenação
basta utilizar apenas o ${e o conteudo} que queremos concatenar */

//Exemplo utilizando o 3° maneira

console.log(` ${nome} voce tem ${idade} anos, pesa  ${peso} Kg tem ${alturaEmMt} de altura `);
console.log(` e seu imc é de " ${imc} ", ${nome}" nasceu em " ${anoNascimento}`);
