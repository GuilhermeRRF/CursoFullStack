
//mostrando o jeito que o professor fez

//1° primeiro vamos para o envio capturando o evento de submit do formulario

//2° criando função setResultado para adicionar o resultado

//3° criando função criaP para criar uma tag p envolta do resultado

//4° 


    const form = document.querySelector(".form");//selecionando formulario


    form.addEventListener('submit', function(e){//escolho primeiro o evento que qro escuta e adiciono uma função que captura o evento q esta como "e"

        e.preventDefault();

        const inputPeso = e.target.querySelector(".peso");/*como sabemos que o evento esta vindo do form podemos usar o e.target que vai me informar 
        qual elemento foi clicado na pagina é uma outra maneira de usar ao inves do form.querySelector*/

       /* console.log('enviado');
        setResultado('ola mundo') //chamando função e inserindo valor*/

        const inputAltura = e.target.querySelector(".altura");

        const peso = Number(inputPeso.value);// pegando input altura que é armazenado em peso, que ja esta convertido como number

        const altura = Number(inputAltura.value);

        console.log(peso,altura)
        
        if(!peso){//se o peso for invalido for um NaN, então 
            
            setResultado('Peso Invalido', false);//mostrando na tela
            return; // queremos que ao dar erro o programa para de executar, pra isso é usado o return

        }

        if(!altura){
            setResultado('Altura invalida', false);// o false é para indicar quando deve aparecer a cor vermelha junto com isValid nos parametros
            return;
        }

        const imc = getImc(peso,altura);/*estamos colocando os inputs que seram recebidos que são peso
         e altura para o parametro e assim com isso conseguimos fazer o calculo*/

        const nivelImc = getNivelImc(imc);

        const msg = "seu IMC é "+imc+" "+nivelImc+".";

        setResultado(msg, true);


    });


    function getNivelImc(imc){//criando lista com condições
        const nivel = ['Abaixo do peso',
         'Peso normal',
         'Sobre peso',
         'Obsidade grau 1',
         'Obsidade grau 2',
         'Obsidade grau 3'
        ];

        if(imc>= 39.9){//dica quando o if é muito pequeno e so tem uma linha podemos tirar as chave e deixar tudo em uma linha so

            return nivel[5];

        }if(imc>=34.9){/* não precisamos de else if porq o return ja para a execução ele nem executa
             se for falso, se for verdadeira excuta e não executa mais nada em baixo*/

            return nivel[4];

        }if(imc>=29.9){

            return nivel[3];

        }if(imc>=24.9){

            return nivel[2];
            
        }if(imc>=18.5){

            return nivel[1];
    
        }if(imc<=18.5){

         return nivel[0];
    
    }
}
    

function getImc(peso, altura){// calculo do imc
    const imc = peso/altura**2;
    return imc.toFixed(2);

}


    
    function criaP( ){// função que cria um p e uma class na tag p

        const p = document.createElement("p");//para adicionar uma tag <p> em volta da mensagem que escrevermos

       // p.innerHTML = "qualquer coisa";// colocando html dentro do <p>, obs: ainda não estou armazenando o p em lugar nenhum, apenas foi criado

        //resultado.appendChild(p);//aqui estamos falando pra armazernar o p que criamos com a mensagem dentro do resultado (insere o elemento p)

        p.classList.add("paragrafo-resultado");// adicionando uma classe na tag <p> com o nome paragrafo-resultado

        return p;

    }


    function setResultado(msg, isValid){ //criando uma função que vai adicionar alguma coisa na div resultado

        const resultado = document.querySelector(".resultado");

        resultado.innerHTML = "";//limpando html

        const p = criaP();//chamando função

        if(isValid){// para mostrar a div em verde ou vermelho
            p.classList.add('paragrafo-resultado');
        }
        else{
            p.classList.add("bad");
        }

        p.innerHTML = msg;

        resultado.appendChild(p);

        /*resultado.innerHTML = msg;// a mensagem que eu mandar vai ir para o parametro msg e vai ser mostrado com innerHTML no html*/

    }







    //objetivo fazer funções pequenas que fazem poucas coisas, mas em um codigo real iremos fazer uma função para cada coisa