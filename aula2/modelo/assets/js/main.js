function IMC(){

let form = document.querySelector(".form");

let resultado = document.querySelector(".resultado");

form.addEventListener("submit", addEventoPrincipal);


function addEventoPrincipal(evento){

evento.preventDefault();

let peso = (form.querySelector(".peso").value);

let altura = (form.querySelector(".altura").value) ;

let imc = Number(peso/(altura*altura));

 
if(imc <18.5){
    resultado.classList.add("resultado-valido");
    resultado.classList.remove("resultado-invalido");
    resultado.innerHTML += "<p> Seu IMC é: "+imc.toFixed(2) +" (Abaixo do peso) </p>";

}

else if(imc >= 18.5 && imc <= 24.9){
    resultado.classList.add("resultado-valido");
    resultado.classList.remove("resultado-invalido");
    resultado.innerHTML += "<p> Seu IMC é: "+imc.toFixed(2) +" (Peso Normal) </p>";

}

else if(imc >= 25 && imc <= 29.9){
    resultado.classList.add("resultado-valido");
    resultado.classList.remove("resultado-invalido");
    resultado.innerHTML += "<p> Seu IMC é: "+imc.toFixed(2) +" (Sobre Peso) </p>";

}

else if(imc >=30 && imc <= 34.9){
    resultado.classList.add("resultado-valido");
    resultado.classList.remove("resultado-invalido");
    resultado.innerHTML += "<p> Seu IMC é: "+imc.toFixed(2) +" (Obesidade grau 1) </p>";

}

else if(imc >= 35 && imc <= 39.9){
    resultado.classList.add("resultado-valido");
    resultado.classList.remove("resultado-invalido");
    resultado.innerHTML += "<p> Seu IMC é: "+imc.toFixed(2) +" (Obesidade grau 2) </p>";

}

else if( imc >= 40){
    resultado.classList.add("resultado-valido");
    resultado.classList.remove("resultado-invalido");
    resultado.innerHTML += "<p> Seu IMC é: "+imc.toFixed(2) +" (Obesidade grau 3) </p>";
    
}


else{
    resultado.classList.add("resultado-invalido");
    resultado.classList.remove("resultado-valido");
    resultado.innerHTML += "<p> Peso Invalido! </p>";
    console.log("Erro nenhum valor inserido!");

}
console.log(imc);


}


}

IMC();

//34;17