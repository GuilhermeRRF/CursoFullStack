 
 let form = document.querySelector(".form");


 form.addEventListener("submit", function(evento){


evento.preventDefault();

let inputpeso = form.querySelector(".peso");

let inputaltura = form.querySelector(".altura");


let peso = Number(inputaltura.value);


let altura = Number(inputpeso.value);


if(!peso){
    setResultado("Peso Invalido!", false);
    return;
}

if(!altura){
    setResultado("Altura Invalida!", false);
    return;
}


console.log(peso, altura);


let imc = getImc(peso , altura);


let nivelImc = getNivelImc(imc);


let msg = ("seu imc é "+imc+" "+nivelImc+"");


setResultado(msg, true);



 });


 function getNivelImc(imc){

    let nivel = ["abaixo do peso", "peso normal","acima do peso","Obesidade grau 1", "Obesidade grau 2","Obesidade grau 3"];


    if(imc < 18.5){

        return nivel = 0;

    }

    if(imc <= 18.5 && imc >= 24.9){

        return nivel = 1;
    }

    if(imc <= 25 && imc >= 29.9){

        return nivel = 2;

    }

    if(imc <=30 && imc >= 34.9){

        return nivel = 3;

    }

    if(imc <=35 && 39.9){

        return nivel = 4;

    }

    if(imc > 40){

        return nivel = 5;

    }


 }


 function getImc(peso, altura){

    let imc = peso/(altura*altura);

    imc.toFixed(2);

    return imc;

 }

function CriaP(){

let p = document.createElement("p");

p.classList.add("paragrafo-principal");

return p;


}





 function setResultado(msg, isValid){

    let resultado = form.querySelector(".resultado");

    resultado.innerHTML = "";

    let p = criaP();

    if (isValid){

        p.classList("paragrafo-resultado")

    }

    else{

        p.classList("bad");

    }


    p.innerHTML = msg;

    resultado.appendChild(p); //estamos adicionando o paragrafo no resultado


 }