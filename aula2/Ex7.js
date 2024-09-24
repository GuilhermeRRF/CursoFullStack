//Trabalhando com Datas aula 46 udemy

//link MDN para aprender mais sobre oq a funcao date pode fazer
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


//criando função date

console.log("Exemplo 1")


/* a funcao date é chamada de funcao construtora, as funcoes construtoras por padrao comecam com
 new em seguida o nome da funcao com a primaira letra mauiscula e (); ficando new Date(); Exemplo abaixo*/

const data = new Date();// criando uma constante data que recebe a funcao construtora date;

/*obs: se eu executar a funcao date assim sem passar nenhum parametro, toda vez que eu executar o codigo
 o js vai criar um novo objeto de data com a data atual que é hora, minutos, seg e milesimo de seg e vai salvar na variavel data;*/



 /*como a funcao date tem varias coisas que herdam de outros locais podemos usar varias funções 
 como exemplo abaixo estamos pedindo pra mostrar a data com o formato gringo*/

console.log(data.toString());

console.log("")


//***************************************************************

// Exemplos 2

console.log("Exemplo 2")


//TimeTamp Unix


/*obs: essa data é formada por milesimos de segundos contadas a partir da data de 01/01/1970 que é o marco 0*/

const tresHoras = 60 * 60 * 3 * 1000;//fazendo tres horas em milésimos segundos do fusiorario

const umDia = 60 * 60 * 24 * 1000; /* 60 * 60  é 1h * 24 eu tenho 24h * 1000 eu tenho esse valor em milésimos de segundos,
 entao temos um dia em milésimos de segundo*/

const data2 = new Date(0 + tresHoras + umDia);// 01/01/1970 TimesTamp unix ou época unix

console.log(data2.toString());

console.log("")


//*************************************************************** 

//Exemplo 3

console.log("Exemplo 3")

let data3 = new Date(2019, 3,20 , 15 , 14, 27,500); //ano, mes, dia, hora, min, seg, mis, nessa ordem

console.log(data3.toString());


console.log("")



//obs: se colocar 60 segundos ele corrigi os minutos colocando mais um minuto, porq 60 segundos não existe, so 59 seg
//obs: posso omitir(tirar os dados do date) e deixa até ano e mes pelo menos para funcionar
//obs: o mes começa do 0 ou seja o numero 3 que era pra ser março é abril e por ai vai




//*************************************************************** 

//Exemplo 4

console.log("Exemplo 4");


const data4 = new Date("2024-04-20 20:15:59"); /* esse formato String começa com ano, mes, dia espaco ou T maiuculo entre a data e hora
a hora começa em hora, min e seg*/

//para obter dia, mes, ano etc...

console.log("Dia", data4.getDate());
console.log("mês", data4.getMonth() + 1);//acrecentando + 1 pois o mes começa contando do 0
console.log("ano", data4.getFullYear());
console.log("hora", data4.getHours());
console.log("min", data4.getMinutes());
console.log("seg", data4.getSeconds());
console.log("ms", data4.getMilliseconds());
console.log("Dia semana", data4.getDay());// 0 é Domingo, 6 é Sábado


console.log(data4.toString()); 


console.log("")


//*************************************************************** 

//Exemplo 5

console.log("Exemplo 5");


const data5 = new Date(1727179178310);


console.log(Date.now());/* podemos obter a data em milésimos de segundo, se pegarmos a  hora em milesimos de segudos que foi executada
 e jogar dentro do new Date obtemos a hora novamente */

 console.log(data5.toString()); 

 console.log("")

 
//*************************************************************** 

//Exemplo 6

console.log("Exemplo 6");


//criando minhs propria funcao que vai formar uma data 


function zeroAEsquerda(num){/* se executarmos não tem zero a esquerda por isso criamos  
    uma função pra colocar um 0 quando tiver um numero menor que 10*/

    return num >= 10 ? num : "0"+num;
}


function formataData(data){/* funcao para obter data e retunar ela*/
    const dia = zeroAEsquerda(data.getDate());//colocamos a funcao zeroAEsquerda para acrescentar o 0 quando for um numero menor que 10
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());

    return dia+"/"+mes+"/"+ano+" "+hora+":"+min+":"+seg; 
}


const data6 = new Date();//criando funcao date
const dataBrasil = formataData(data6);
console.log(dataBrasil);