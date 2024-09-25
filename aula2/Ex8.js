

// aprendendo a usar Switch/Case e quando utilizar aula 47


/*-const data  = new Date('1987-04-20 00:00:00:');

let diaSemana = data.getDay();
diaSemana = 5;
let diaSemanaTexto;*/

//Exemplo utilizando if, que seria melhor fazendo com Switch/Case

/*if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}

else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';

}
else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';

    
}else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';

}else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';

}else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';

}else if (diaSemana === 6){
    diaSemanaTexto = 'Sabado';

}
else{
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);*/


//******************************************************************* 

// Exemplo 1 fazendo com Switch/Case

/*nesses exemplos usamos apenas uma variavel para verificar dar condições e etc, por isso  que nesse caso 
é mais recomendado o uso de  switch case doq if e else*/

/*const data  = new Date('1987-04-20 00:00:00:');

let diaSemana = data.getDay();
//diaSemana = 7;
let diaSemanaTexto;

switch(diaSemana){ //se for so uma variavel que eu quero checar usamos switch case

case 0: //no case colocamos o valor que queremos

    diaSemanaTexto = 'Domingo';

break;// break para parar

case 1: //no case colocamos o valor que queremos

    diaSemanaTexto = 'Segunda';

break;
    
case 2: //no case colocamos o valor que queremos

diaSemanaTexto = 'Terça';

break;


case 3: //no case colocamos o valor que queremos

diaSemanaTexto = 'Quarta';

break;


case 4: //no case colocamos o valor que queremos

diaSemanaTexto = 'Quinta';

break;


case 5: //no case colocamos o valor que queremos

diaSemanaTexto = 'Sexta';

break;


case 6: //no case colocamos o valor que queremos

    diaSemanaTexto = 'Sabado';

break;
default:// default que é parecido com else
 diaSemanaTexto = '';
}// se quiser ppode ser adicionado o break mas como é a ultima condição ja vai sair do bloco de qualquer maneira

console.log(diaSemana, diaSemanaTexto);


//Explicação: então tendo a informação do diaSemana ele vai direto na codicao verdadeira executa e para no break sai do bloco e ja executa o print

*/


//******************************************************************* 

// Exemplo 2 fazendo com Switch/Case

function getdiaSemanaTexto(diaSemana){
    
    let diaSemanaTexto;

switch(diaSemana){ //se for so uma variavel que eu quero checar usamos switch case

case 0: //no case colocamos o valor que queremos

    diaSemanaTexto = 'Domingo';

return diaSemanaTexto; // pode ser usado no lugar de break para parar a execucao e ja retornar o valor

case 1: 

    diaSemanaTexto = 'Segunda';

return diaSemanaTexto;
    
case 2: 

diaSemanaTexto = 'Terça';

return diaSemanaTexto;


case 3: 

diaSemanaTexto = 'Quarta';

return diaSemanaTexto;


case 4: 

diaSemanaTexto = 'Quinta';

return diaSemanaTexto;


case 5:

diaSemanaTexto = 'Sexta';

return diaSemanaTexto;


case 6:

    diaSemanaTexto = 'Sabado';

return diaSemanaTexto;

default:// default que é parecido com else
 diaSemanaTexto = '';

}

return diaSemanaTexto;

}


const data  = new Date('1987-04-20 00:00:00:');

let diaSemana = data.getDay();
//diaSemana = 7;

let diaSemanaTexto = getdiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);