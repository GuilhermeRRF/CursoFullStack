/*
instruturas condicionais

if e else

*/


let hora =10;

if(hora >=0 && hora <=11){
    console.log("Bom dia");
}
else if(hora>=12 && hora <=18){// sempre que eu quiser novas condições else if
    console.log("Boa tarde")
}
else if(hora<=19 && hora <=22){
        console.log("Boa noite")
}
else{//esse else so sera executado se nenhuma das condições acima for verdadeira
    console.log("1 hora para acabar o dia ")
}