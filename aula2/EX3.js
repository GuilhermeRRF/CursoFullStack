/*
O javascript entende como falso: false,0 '',"",``, null/undefined e NaN.
tudo sem ser isso costa como true
*/

console.log( 0 || false || null || 'Luiz Otávio' || true )/* vai verificar sempre o que é verdadeiro e mostrar
a primeira coisa verdadeira na tela*/

console.log(0 && false && null && 'luis' && true )/* vai verificar sempre o que é falso e mostrar
a primeira coisa verdadeira na tela*/