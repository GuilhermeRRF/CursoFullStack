 

    /*aqui é explicado passo a passo oq cada coisa faz, para fazer um formulario com dados basicos e enviar 
    esses dados e mostrar na tela, aqui mostra o segundo exemplo mas todas as dicas e explicações do primeiro
    exemplo devem ser seguidas aqui também*/


    function meuEscopo(){ //nada que está nessa função podera ser acessado no escopo global, so acessamos chamando a função

        const form = document.querySelector('.form'); /* modo mais moderno para selecionar coisas em JavaScript usamos uma variavel
        pra armazenar o dado pegamos o form dentro do document, e usamos o queryselector e selecionamos o formulario pelo id, class ou tag*/
       
        const resultado = document.querySelector(".resultado");

        const pessoas = [];

      function recebeEventoForm (evento){

        evento.preventDefault();
       
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        pessoas.push ({//criando objeto adicionando elemento dentro do array
            nome: nome.value,//pegando o valor que a pessoa vai digitar no input com value
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });


        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;/*mostrando na tela*/

      };



       
       form.addEventListener('submit', recebeEventoForm);/*estamos falando para form.adicionar um escutador de eventos,
       ficando form.addEventListener, e dentro iremos colocar qual evento queremos escutar que é o evento de submit
       e isso vai receber uma função recebeEventoForm */
       
       };
       
       meuEscopo();//chamando função
       
       
       //OBS:escutador de eventos é o que vai monitorar tudo oq acontece no navegador de evento