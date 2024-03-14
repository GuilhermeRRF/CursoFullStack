

//Exemplo de como  as coisas funciona para fazer o exercicio Ex23.2.js

/*aqui é explicado passo a passo oq cada coisa faz, para fazer um formulario com dados basicos e enviar 
esses dados e mostrar na tela, aqui mostra o primeiro exemplo*/


/* envolvemos tudo em uma função para evitar que o codigo de conflito no escopo global na hora de passar informações, 
como por exemplo fazer o uso de uma biblioteca que tem o nome da varivel como "nomeCompleto", e no nosso codigo 
tiver a variavel com o mesmo nome na varivel escrito como "nomeCompleto", isso pode dar conflito então usamos
a função que deixa tudo dentro dela protegido de conflitos*/

//const nome = 'Luiz' escopo global, chamamos assim porq é a onde todo mundo esta

function meuEscopo(){ //nada que está nessa função podera ser acessado no escopo global, so acessamos chamando a função

 const form = document.querySelector('.form'); /* modo mais moderno para selecionar coisas em JavaScript usamos uma variavel
 pra armazenar o dado pegamos o form dentro do document, e usamos o queryselector e selecionamos o formulario pelo id, class ou tag*/

//segunda maneira mais moderna
let contador = 1;// adicionamos o contador so pra saber quantas vezes clicamos

function recebeEventoForm (evento){// criando a função que receber o parametro evento

evento.preventDefault();//comando para previnir que o navegador atualize, estamos falando para ele previnir o que aconetece por padrao.
alert(1); //quando o formulario for enviado eu mostro na tela
console.log('Form não foi enviado'+contador);
contador ++;
}

form.addEventListener('submit', recebeEventoForm);/*estamos falando para form.adicionar um escutador de eventos,
ficando form.addEventListener, e dentro iremos colocar qual evento queremos escutar que é o evento de submit
e isso vai receber uma função recebeEventoForm */

}

meuEscopo();


//OBS:escutador de eventos é o que vai monitorar tudo oq acontece no navegador de evento