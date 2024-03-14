

/*Dados Primitivos - string, number, boolean,undefined, null, (bigint,symbol) - valores copiados

Referencias (mutável) - array, object, function - passados por referencia

*/


const a={//criamdo objeto
    nome: 'Henrique',
    sobrenome:'siqueira',
    
};

const b = a;

a.nome = 'Breno';

console.log(b);

