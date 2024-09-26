

// switchdata exercicio aula 48


function zero(num){

return num >= 10 ? num: '0'+num;


}

function Semana(diaSemana){

    let diaSemanat 


    switch(diaSemanat){

        case 0:

        diaSemanat = "Domingo";

        return diaSemanat;

         case 1:

        diaSemanat = "Segunda";

        return diaSemanat;

        case 2:

        diaSemanat = "Terça";

        return diaSemanat;

        case 3:

        diaSemanat = "Quarta";

        return diaSemanat;

        case 4:

        diaSemanat = "Quinta";

        return diaSemanat;

        case 5:

        diaSemanat = "Sexta";

        return diaSemanat;

        case 6:

        diaSemanat = "Sabado";

        return diaSemanat;
        
        default:

        diaSemanat = "";

        return diaSemanat;


}

}



function Data(){

let hora = zero (data.getHours());

let min = zero(data.getMinutes());

let mes = zero(data.getMonth() + 1);

let ano = zero(data.getFullYear());

let diaSemana = zero(data.getDate());

let textoSemana = Semana(diaSemana);

return ""+textoSemana+ ", "+diaSemana+ " de "+mes+" de " +ano+" " +hora+":"+min+"";


}



let resultado = document.querySelector(".resultado");

resultado.innerHTML = "";

let data = new Date();


console.log(data.toString());

let datacompleta = Data();

resultado.innerHTML += "<p> "+datacompleta+ " </p>";