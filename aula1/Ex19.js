

//Aprendendo sobre Arrys

const alunos  = ['joao','maria','bruxa'];

console.log(alunos.length)//para saber o tamanho do meu arrays

console.log(alunos[0]);// buscando valor na posição 0

alunos.push('Guilherme');// adicionando o elemento na lista inserindo ele no fim

alunos.unshift("Gustavo")/* adicionando o elemento na lista inserindo ele no começo,
 mas ao inserir ele no meio ele move os outros dados da lista de posição*/

 alunos.unshift("Gabi")


alunos.pop();// remove os ultimos itens da lista

const removidos= alunos.pop();//posso armazenar quem foi removido

const removidoss =alunos.shift();//remove itens da lista na primeira posição

delete alunos [1];// podemos apagar informando a posição, mas após apagar a posição fica vazia, aparecendo <1 empty item>

console.log(alunos.slice(0, -1)); //para mostrar itens de acordo com a posição no caso esta de 0 a -1

console.log(alunos);

console.log(alunos instanceof Array);// para verificar se a variavel que estamos mexendo é um array


console.log(`foi removida no pop `+ removidos)

console.log(`foi removida no shift `+ removidoss)