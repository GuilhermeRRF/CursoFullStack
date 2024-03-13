

//Criando objetos

//quando eu crio um  array uso [], quando crio um objeto uso o {}

/*const pessoal ={

    nome: 'Guilherme',
    sobrenome: 'souza',
    idade: 25


    
console.log(pessoal.nome);
console.log(pessoal.sobrenome);
    
};*/

//criando fução que cria os dados da pessoa

/*function criaPessoa(nome,sobrenome,idade){//parametro
    return{//atributos
        nome:nome,
        sobrenome:sobrenome,
        idade: idade
        
    };
}

const pessoal = criaPessoa('Guilherme', 'Dimas', 17);
const pessoal1 = criaPessoa('Gustavo', 'Slva', 20);
const pessoal2 = criaPessoa('Gabriella', 'Rizetti', 16);// criando objeto e colocando argumento para ser enviando para o parametro


//puxando dados
console.log(pessoal.nome)//guilherme
console.log(pessoal1.sobrenome)//gustavo
console.log(pessoal2)//gabriella

*/


//criando fução que cria os dados da pessoa

const pessoal = {//parametro
        nome: "Luiz",
        sobrenome: "estevam",
        idade: 25,

        fala(){//fazendo a execução de falar
            console.log(` A minha idade atual é ${this.idade}`);/*dentro do objeto temos a palavra "this" 
            com ela eu posso referenciar qualquer objeto e atributo*/
        },

        incrementaIdade(){//esse metodo vai incrementar mais 1 na idade a cada vez que eu chamae fala
            this.idade++;
        }
        
};

pessoal.fala();//falando
pessoal.incrementaIdade();//encrementando
pessoal.fala();//falando


