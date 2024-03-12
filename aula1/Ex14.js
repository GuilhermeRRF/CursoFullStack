
//aprendendo mais sobre variaveis


// console.log("ola \"mundo\" "); utilizamos barra invertida para escape


//              01234567  
let umaString ="Um texto";

console.log(umaString[1]);/* pegando elemento do indice 4*/

console.log(umaString.charAt(6));// outro jeito de buscar o indece existem varias maneiras de usar o index caso necessario

console.log(umaString.match(/[a-z]/)); //expressão regular, ele me retorna as letras minusculas

console.log(umaString.search(/[x]/));// busca a posição do indece

console.log(umaString.replace('um', 'outra'));// substituir a palavra um por outra

//                 01234567  
let outraString = "O rato roeu a roupa do rei de roma";

console.log(umaString.replace(/r/g, '#'));/*substitue todas as letras r */

console.log(outraString.length);// conta o numero de caracteres

console.log(outraString.slice(2, 5));// podemos usar para determinar qual letra queremos mostrar de acordo com a posição

console.log(outraString.split(' '));// separar palavra com '';

console.log(outraString.toUpperCase()); //deixar tudo em letra mauscula;

console.log(outraString.toLowerCase());