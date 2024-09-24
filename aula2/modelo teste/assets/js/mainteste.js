function IMC(){

    let form = document.querySelector(".form")

    form.addEventListener('submit', AddNovEvento);

    function AddNovEvento(evento){

        evento.preventDefault();

        let peso = form.querySelector(".peso");
        let altura = form.querySelector(".altura");


        if(!peso){
            return("Peso Invalido!", false);
        }

        if(!altura){
            return("Altura Invalida!" , false)
        }

        let imc = getimc(peso,altura);

        let nivelImc= getNivelImc(imc);

        console.log(peso,altura);   

        let msg = ("O seu Imc é "+imc+" "+nivelImc);


        setResultado(msg, true);


    }

}

function getNivelImc(imc){

let nivel = ["abaixo do peso",
    'peso normal',
    'sobre peso',
    'obesidade grau 1',
    'obesidade grau 2',
    'obesidade grau 3'
]


if(imc<= 18.5){
    return nivel[0];
}

if(imc>=18.5 && imc<=24.9){
    return nivel[1];
}

if(imc>=25 && imc<=29.9){
    return nivel[2];

}
if(imc>=30 && imc<=34,9){
    return nivel[3];
}

if(imc>=35 && imc<=39,9){
    return nivel[4];
}
if(imc>=40){
    return nivel[5];
}

}

function getimc(peso, altura){
    let imc = peso/(altura*altura);
    return imc;

}

function setResultado (msg){
    let resultado = document.querySelector('.resultado');


}