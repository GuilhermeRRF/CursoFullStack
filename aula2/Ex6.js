

//Operação ternaria


//muito utilizada e deixa o codigo menor


// que é simplesmente "?" ":"



// Exemplo sem operação ternaria

// const pontuaçaoUSuario = 999;

// if(pontuaçaoUSuario >= 1000){
//     console.log("Usuario vip");
// }
// else{
//     console.log("Usuario normal");
// }


// Exemplo com operação ternaria

// nesse exemplo escrevemos a mesma coisa em uma unica linha

const pontuacaoUsuario = 1200;//criando variavel que recebe o valor da pontuação

const  nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal"; /*primeiro criamos a variavel que recebe a condicao
se a condicao for verdadeira(?) então usuario vip senão(:) usuario normal  */

console.log(nivelUsuario);//mostrando nivel de usuario na tela



//OBS: dependendo do tamanho da condição pode ser necessario usar o parenteses.

// EXEMPLO: (condicao) ? "Valor para verdadeiro": "Valor para Falso"; 

//****************************************************************

//exemplo setando valores padrões Fullback


//Explicação Ou seja se a cor for nula sera preta por padrao, mas se a cor não for nula, por exemplo for vermelha então sera vermelha*/


/*criamos a variavel corUsuario que recebe o valor da cor null, depois criamos a variavel corPadrao que recebe corUsuario
ou "||" preta.*/ 

const corUsuario = null;

const corPadrao = corUsuario || "Preta";


console.log(corPadrao);