let  numero = Number(prompt("Digite um numero:"));// função prompt sempre retorna como String então é necessario fazer a conversão com o Number.


const numeroTitulo = document.getElementById('numero-titulo');/* aqui estamos falando para o javaScript selecionar o elemento numero-titulo,
 e salvar na variavel numeroTitulo*/

const texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero;//comando para quando escrevermos aparecer  a informação na tela no lugar onde esta o ID

texto.innerHTML = "";//limpando o innerHTML para mostrar na tela,isso tira o Texto e o 0 escrito no html
texto.innerHTML += `<p>Raiz quadrada é:  ${numero ** 0.5}.</p>`;
texto.innerHTML += `</p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `</p>é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `</p>Arredondamento para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `</p>Arredondamento para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `</p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`; 


// mexer com casos decimais

//55.1987555