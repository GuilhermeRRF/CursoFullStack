 

 //aprendendo Funções, que objetivo é criar um trecho de codigo na qual posso reutilizar ele quando quiser.



 //criando função com parametros
 function saudacao (nome){//minha função pode receber um valor no parametro nome
    return `Bom dia ${nome}`;//para retornar um valor, tudo que esta abaixo de return não é mais executado
 };

//chamando função
 saudacao('Guilherme');/*quando eu chamo a função eu fala o que eu quero que esteja 
 no meu parametro que eu coloquei dentro da função*/

 const variavel = saudacao('Larissa');/* criando variavel para armazenar o valor*/
 console.log(variavel);//mostrando valor retornado na tela


//********************************



 function soma(x, y){
    const resultado = x + y;
    return resultado;

 }

console.log(soma(2,2));

const resultado = soma("Felipe ", "Ribeiro");
console.log(resultado)


//*******************************************

function multiplicacao( A=1 , B=2){// deixar o parametro com valor padrão caso não envie nenhum valor
    const resultadoM = A * B;
    return resultadoM;
}


const resultadoM = multiplicacao();

console.log(resultadoM)


//*************************************

//outra forma de fazer uma função


const raiz = function(n){// criasmos uma função que chama raiz

return  n ** 0.5;

};//ponto e vrigula obrigatorio nesse caso


console.log(raiz(9));// quero saber a raiz de 9


 //*****************************************
 
//maneira mais moderna de criar funções, essa é chamada de arrow function

const raizM = n => n ** 0.5;


const resul = (raiz(25));

console.log(resul)



 //obs: funções são muito poderosas parar agilizar o trabalho, principalmente em codigos gigantes
 // não consigo acessar nada de fora da função tudo oq esta dentro esta protegido